import * as esbuild from "esbuild";

const ctx = await esbuild.context({
  entryPoints: ["src/main.ts"],
  bundle: true,
  format: "esm",
  outfile: "public/widget.js",
});

await ctx.watch();
const { port } = await ctx.serve({ servedir: "public", port: 5400 });
console.log(`Dev server running at http://localhost:${port}`);
