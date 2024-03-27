import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "servicetwo",
      filename: "remoteEntryTwo.js",
      exposes: {
        "./DemoComp": "./src/components/DemoComp.tsx",
      },
      shared: ["react"],
    }),
  ],  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
