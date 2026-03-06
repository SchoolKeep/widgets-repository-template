import { readFileSync, existsSync } from 'fs';
import { join } from 'path';
import type { Registry, WidgetEntry } from './types.js';

const ROOT = process.cwd();

export const readRegistry = (): Registry => {
  const raw = readFileSync(join(ROOT, 'widget_registry.json'), 'utf-8');
  return JSON.parse(raw) as Registry;
};

const readConnectorsRegistry = (): { connectors: unknown[] } | null => {
  const path = join(ROOT, 'connectors_registry.json');
  if (!existsSync(path)) return null;
  return JSON.parse(readFileSync(path, 'utf-8')) as { connectors: unknown[] };
};

export const isDevWidget = (widget: WidgetEntry): boolean =>
  existsSync(join(ROOT, 'widgets', widget.type, 'package.json'));

const readPreviewHtml = (widget: WidgetEntry): string => {
  const devEntryPath = join(ROOT, 'widgets', widget.type, 'content.html');
  if (isDevWidget(widget) && existsSync(devEntryPath)) {
    return readFileSync(devEntryPath, 'utf-8');
  }

  return readFileSync(join(ROOT, widget.source.path, widget.source.entry), 'utf-8');
};

const absolutizeAssetUrls = (html: string, tunnelUrl: string): string =>
  html
    .replace(/(href|src)="\.\/([^"]+)"/g, `$1="${tunnelUrl}/$2"`)
    .replace(/(href|src)="\/([^"]+)"/g, `$1="${tunnelUrl}/$2"`);

export const buildPreviewRegistry = (
  tunnelMap: Map<string, string>,
  allWidgets: WidgetEntry[],
): object => {
  const widgets = [...tunnelMap.entries()].map(([type, tunnelUrl]) => {
    const widget = allWidgets.find((w) => w.type === type)!;
    const { source, ...rest } = widget;
    const rawHtml = readPreviewHtml(widget);
    const html = absolutizeAssetUrls(rawHtml, tunnelUrl);
    return {
      ...rest,
      content: {
        html,
        method: 'GET',
        requiresAuthentication: false,
        cacheStrategy: 'no-cache',
      },
    };
  });
  const connectors = readConnectorsRegistry();
  if (connectors) return { widgets, connectors: connectors.connectors };
  return { widgets };
};
