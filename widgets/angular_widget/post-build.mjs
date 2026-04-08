import { renameSync, writeFileSync, existsSync, readdirSync } from "fs";

const distDir = existsSync("dist/browser") ? "dist/browser" : "dist";

const mainJs = `${distDir}/main.js`;
if (!existsSync(mainJs)) {
  const actual = readdirSync(distDir).join(", ");
  throw new Error(
    `post-build: expected ${distDir}/main.js but it was not found. Files present: ${actual}`,
  );
}

renameSync(mainJs, `${distDir}/widget.js`);

const stylesLine = existsSync(`${distDir}/styles.css`)
  ? `<link rel="stylesheet" href="./styles.css">\n`
  : "";

const polyfillsLine = existsSync(`${distDir}/polyfills.js`)
  ? `<script type="module" src="./polyfills.js"></script>\n`
  : "";

writeFileSync(
  `${distDir}/index.html`,
  `${stylesLine}${polyfillsLine}<script type="module" src="./widget.js"></script>\n`,
);
