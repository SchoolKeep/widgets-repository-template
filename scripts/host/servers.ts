import { join } from 'path';
import { writeFileSync, unlinkSync } from 'fs';
import { execa } from 'execa';
import type { WidgetEntry } from './types.js';
import { logWidget } from './ui.js';
import chalk from 'chalk';

const ROOT = process.cwd();

export const startWidgetServer = async (
  widget: WidgetEntry,
  port: number,
  colorIndex: number,
): Promise<() => void> => {
  const widgetDir = join(ROOT, 'widgets', widget.type);
  const viteBin = join(widgetDir, 'node_modules', '.bin', 'vite');

  const overridePath = join(widgetDir, '.vite-preview.config.ts');
  writeFileSync(overridePath, `
import { mergeConfig } from 'vite';
import base from ${JSON.stringify(join(widgetDir, 'vite.config.ts'))};
export default mergeConfig(base, {
  server: { allowedHosts: true },
  plugins: [{
    name: 'widget-dev',
    configureServer(server) {
      server.middlewares.use('/widget.js', (_req, res) => {
        res.setHeader('Content-Type', 'application/javascript');
        res.end("export * from '/src/main.tsx';");
      });
      server.middlewares.use('/index.html', (_req, res) => {
        res.setHeader('Content-Type', 'text/html');
        res.end(\`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <script type="module" src="/@vite/client"></script>
  <script type="module">
    import { injectIntoGlobalHook } from "/@react-refresh";
    injectIntoGlobalHook(window);
    window.$RefreshReg$ = () => {};
    window.$RefreshSig$ = () => (type) => type;
  </script>
  <link rel="stylesheet" href="/widget.css">
</head>
<body>
  <script type="module" src="/widget.js"></script>
</body>
</html>\`);
      });
    },
  }],
});
`);

  const proc = execa(viteBin, ['dev', '--port', String(port), '--config', overridePath], {
    cwd: widgetDir,
  });

  proc.stdout?.on('data', (chunk: Buffer) => {
    for (const line of chunk.toString().split('\n').filter(Boolean)) {
      logWidget(widget.type, colorIndex, line);
    }
  });

  proc.stderr?.on('data', (chunk: Buffer) => {
    for (const line of chunk.toString().split('\n').filter(Boolean)) {
      logWidget(widget.type, colorIndex, chalk.red(line));
    }
  });

  proc.catch(() => {});
  await new Promise<void>((resolve) => setTimeout(resolve, 1500));

  return () => {
    proc.kill();
    unlinkSync(overridePath);
  };
};
