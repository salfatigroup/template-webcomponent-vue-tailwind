import * as path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), cssInjectedByJsPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  define: {
    __DEV__: process.env.NODE_ENV === "development",
  },
  build: {
    emptyOutDir: false,
    commonjsOptions: {
      include: [/node_modules/],
    },
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
    lib: {
      entry: "./src/main.ts",
      name: "SGLib",
      fileName: (format) => `sg-lib.${format}.js`,
    },
  },
});

