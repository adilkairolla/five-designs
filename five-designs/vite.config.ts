import { defineConfig } from "vite";
import { devtools } from "@tanstack/devtools-vite";
import { createReadStream, existsSync, statSync } from "node:fs";
import path from "node:path";

import { tanstackStart } from "@tanstack/react-start/plugin/vite";

import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { cloudflare } from "@cloudflare/vite-plugin";

function serveBasePublicAssets() {
  const projectsRoot = path.resolve("public", "projects");

  return {
    name: "serve-base-public-assets",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (!req.url?.startsWith("/five-designs/projects/")) {
          next();
          return;
        }

        const url = new URL(req.url, "http://localhost");
        const relativePath = decodeURIComponent(
          url.pathname.replace("/five-designs/projects/", ""),
        );
        let filePath = path.resolve(projectsRoot, relativePath);

        if (!filePath.startsWith(projectsRoot)) {
          res.statusCode = 403;
          res.end("Forbidden");
          return;
        }

        if (existsSync(filePath) && statSync(filePath).isDirectory()) {
          filePath = path.join(filePath, "index.html");
        }

        if (!existsSync(filePath)) {
          next();
          return;
        }

        res.setHeader("Content-Type", contentType(filePath));
        createReadStream(filePath).pipe(res);
      });
    },
  };
}

function contentType(filePath: string) {
  if (filePath.endsWith(".html")) return "text/html; charset=utf-8";
  if (filePath.endsWith(".js")) return "text/javascript; charset=utf-8";
  if (filePath.endsWith(".css")) return "text/css; charset=utf-8";
  if (filePath.endsWith(".svg")) return "image/svg+xml";
  if (filePath.endsWith(".png")) return "image/png";
  if (filePath.endsWith(".jpg") || filePath.endsWith(".jpeg")) return "image/jpeg";
  if (filePath.endsWith(".webp")) return "image/webp";
  if (filePath.endsWith(".woff2")) return "font/woff2";

  return "application/octet-stream";
}

const config = defineConfig({
  base: "/five-designs/",
  resolve: { tsconfigPaths: true },
  plugins: [
    serveBasePublicAssets(),
    devtools(),
    cloudflare({ viteEnvironment: { name: "ssr" } }),
    tailwindcss(),
    tanstackStart({
      router: {
        basepath: "/five-designs",
      },
      client: {
        base: "/five-designs/_build",
      },
    }),
    viteReact(),
  ],
});

export default config;
