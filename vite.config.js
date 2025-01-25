import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  base: "/hrishikeshreddy.dev/",
  plugins: [vue()],
  resolve: {
    alias: {
      "@components": "/src/components",
      "@assets": "/src/assets",
      "@content": "/src/content"
    }
  },
  css: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")]
    }
  }
});
