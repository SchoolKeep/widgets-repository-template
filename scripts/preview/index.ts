import chalk from 'chalk'
import { readFileSync, existsSync } from 'fs'
import path from 'path'
import inquirer from 'inquirer'
import * as ui from '../host/ui'
import { readWidgetRegistry } from '../host/registry'
import type { WidgetDefinition } from '../host/types'
import * as tunnel from './tunnel'
import * as ngrok from './ngrok'
import * as git from './git'
import * as processes from './processes'
import type { NgrokSession } from './ngrok'
import type { DevProcess } from './processes'

const REPO_ROOT = process.cwd()
const DEFAULT_PORT = 5173

interface SessionState {
  registrySnapshot: string
  ngrokSession: NgrokSession | null
  devProcess: DevProcess | null
  widget: WidgetDefinition
  committed: boolean
}

const findPreviewableWidgets = (): WidgetDefinition[] =>
  readWidgetRegistry().widgets.filter(w => {
    const pkgPath = path.join(REPO_ROOT, 'widgets', w.type, 'package.json')
    if (!existsSync(pkgPath)) return false
    try {
      const pkg = JSON.parse(readFileSync(pkgPath, 'utf-8'))
      return typeof pkg?.scripts?.dev === 'string'
    } catch {
      return false
    }
  })

const getWidgetPort = (widgetType: string): number => {
  const pkgPath = path.join(REPO_ROOT, 'widgets', widgetType, 'package.json')
  if (!existsSync(pkgPath)) return DEFAULT_PORT
  try {
    const pkg = JSON.parse(readFileSync(pkgPath, 'utf-8'))
    return typeof pkg?.port === 'number' ? pkg.port : DEFAULT_PORT
  } catch {
    return DEFAULT_PORT
  }
}

const showSessionStatus = (widget: WidgetDefinition, tunnelUrl: string, port: number): void => {
  const W = 58
  const border = chalk.bold.cyan
  const row = (text: string) => {
    const padded = `  ${text}`.padEnd(W)
    console.log(`  ${border('│')}${padded}${border('│')}`)
  }
  const empty = () => console.log(`  ${border('│')}${' '.repeat(W)}${border('│')}`)
  console.log()
  console.log(`  ${border('╭' + '─'.repeat(W) + '╮')}`)
  empty()
  row(chalk.bold('Preview Session'))
  empty()
  row(`Widget:   ${widget.type}`)
  row(`Tunnel:   ${tunnelUrl}`)
  row(`Dev port: ${port}`)
  empty()
  row('Open CC and refresh. Dev server logs below.')
  row('Press Ctrl+C to end session and restore registry.')
  empty()
  console.log(`  ${border('╰' + '─'.repeat(W) + '╯')}`)
  console.log()
}

let cleaningUp = false

const cleanup = async (state: SessionState): Promise<void> => {
  if (cleaningUp) return
  cleaningUp = true

  console.log()
  ui.info(chalk.yellow('Shutting down...'))

  if (state.devProcess) processes.stopDevServer(state.devProcess)
  if (state.ngrokSession) ngrok.stopNgrok(state.ngrokSession)

  tunnel.writeRegistry(state.registrySnapshot)
  ui.info('Registry restored.')

  if (state.committed) {
    try {
      git.commitAndPush(`chore: restore registry after preview session for ${state.widget.type}`)
      ui.info('Registry restore committed and pushed.')
    } catch (e: unknown) {
      ui.warn(`Failed to push restore commit: ${e instanceof Error ? e.message : String(e)}`)
    }
  }

  console.log()
  console.log(chalk.bold.cyan('  Goodbye!'))
  console.log()
}

const main = async (): Promise<void> => {
  ui.showBanner()

  let widgets: WidgetDefinition[]
  try {
    widgets = findPreviewableWidgets()
  } catch (e: unknown) {
    ui.error(e instanceof Error ? e.message : String(e))
    process.exit(1)
  }

  if (widgets.length === 0) {
    ui.error('No previewable widgets found (need a "dev" script in package.json)')
    process.exit(1)
  }

  let selectedWidget: WidgetDefinition
  if (widgets.length === 1) {
    selectedWidget = widgets[0]
    ui.info(`Auto-selected widget: ${chalk.bold(selectedWidget.type)}`)
  } else {
    const { widget } = await inquirer.prompt<{ widget: WidgetDefinition }>([
      {
        type: 'list',
        name: 'widget',
        message: chalk.bold('Which widget do you want to preview?'),
        choices: widgets.map(w => ({
          name: `${chalk.bold(w.title ?? w.type)}  ${chalk.dim(w.type)}`,
          value: w,
        })),
      },
    ])
    selectedWidget = widget
  }

  if (git.checkDirtyState()) {
    ui.warn('Uncommitted changes in other files detected. Proceeding anyway.')
  }

  const port = getWidgetPort(selectedWidget.type)
  const ngrokSpinner = ui.spinner('Starting ngrok...')
  let ngrokSession: NgrokSession
  try {
    ngrokSession = await ngrok.startNgrok(port)
    ngrokSpinner.succeed(`ngrok tunnel: ${chalk.cyan(ngrokSession.tunnelUrl)}`)
  } catch (e: unknown) {
    ngrokSpinner.fail(`Failed to start ngrok: ${e instanceof Error ? e.message : String(e)}`)
    process.exit(1)
  }

  const registrySnapshot = tunnel.readRegistryRaw()
  const state: SessionState = {
    registrySnapshot,
    ngrokSession,
    devProcess: null,
    widget: selectedWidget,
    committed: false,
  }

  process.on('SIGINT', async () => {
    await cleanup(state)
    process.exit(0)
  })
  process.on('SIGTERM', async () => {
    await cleanup(state)
    process.exit(0)
  })
  process.on('uncaughtException', async (err) => {
    ui.error(err.message)
    await cleanup(state)
    process.exit(1)
  })

  const patchedRegistry = tunnel.patchRegistry(registrySnapshot, selectedWidget.type, ngrokSession.tunnelUrl)
  tunnel.writeRegistry(patchedRegistry)

  const commitSpinner = ui.spinner('Committing and pushing registry...')
  try {
    git.commitAndPush(`chore: start preview session for ${selectedWidget.type}`)
    state.committed = true
    commitSpinner.succeed('Registry committed and pushed.')
  } catch (e: unknown) {
    commitSpinner.fail(`git push failed: ${e instanceof Error ? e.message : String(e)}`)
    await cleanup(state)
    process.exit(1)
  }

  const widgetDir = path.join(REPO_ROOT, 'widgets', selectedWidget.type)
  const devProcess = processes.startDevServer(
    widgetDir,
    ngrokSession.tunnelUrl,
    port,
    line => ui.widgetLog(selectedWidget.type, line)
  )
  state.devProcess = devProcess

  devProcess.process.on('exit', async (code) => {
    if (code !== 0 && code !== null) {
      await cleanup(state)
      process.exit(1)
    }
  })

  showSessionStatus(selectedWidget, ngrokSession.tunnelUrl, port)
}

main().catch(async (e: unknown) => {
  ui.error(e instanceof Error ? e.message : String(e))
  process.exit(1)
})
