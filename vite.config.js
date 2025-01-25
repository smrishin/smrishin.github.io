import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
const ENV_VAR = import.meta.env.VITE_ENV_VAR;

// https://vite.dev/config/
export default defineConfig({
  base: ENV_VAR == "localhost" ? "/" : "/hrishikeshreddy.dev/",
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
