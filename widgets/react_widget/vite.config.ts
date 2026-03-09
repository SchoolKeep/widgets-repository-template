import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig(({ mode }) => {
  const { VITE_TUNNEL_URL } = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [
      react(),
      {
        name: "absolute-tunnel-urls",
        transformIndexHtml: (html) => {
          if (!VITE_TUNNEL_URL) return html;

          const importMap = `<script type="importmap">${JSON.stringify({
            imports: {
              "/@react-refresh": `${VITE_TUNNEL_URL}/@react-refresh`,
              "/@vite/client": `${VITE_TUNNEL_URL}/@vite/client`,
            },
          })}</script>`;

          return html
            .replace(/src="\/(.*?)"/g, `src="${VITE_TUNNEL_URL}/$1"`)
            .replace("<head>", `<head>\n    ${importMap}`);
        },
      },
    ],
    server: {
      allowedHosts: true,
      cors: true,
    },
  };
});
