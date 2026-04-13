import { defineConfig } from "vite";

export default defineConfig({
  server: {
    cors: true,
  },
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
  build: {
    lib: {
      entry: "src/main.ts",
      formats: ["es"],
      fileName: "widget",
    },
  },
});
