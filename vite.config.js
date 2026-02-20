
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: "assets",
  base: "/build/",
  build: {
    outDir: "../public/build",
    emptyOutDir: true,
    manifest: true,
    rollupOptions: {
      input: {
        app: "assets/main.jsx",
      },
    },
  },
  server: {
    strictPort: true,
    port: 5173,
    origin: "http://localhost:5173",
  },
});
