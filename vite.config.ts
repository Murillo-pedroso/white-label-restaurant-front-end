// vite.config.js ou vite.config.ts
import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // isso mapeia '@' para a pasta 'src'
    },
  },
});
