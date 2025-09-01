import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path, { resolve } from "path";

export default defineConfig({
  base: "/jonalainez/",
  plugins: [vue()],
  resolve: {
    alias: {
      // "@": resolve(__dirname, "src"),
      '@': path.resolve(__dirname, './src'),
    },
  },
});