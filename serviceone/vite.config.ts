import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "serviceone",
      filename: "remoteEntryOne.js",
      exposes: {
        "./CardComp": "./src/components/CardComp.tsx",
      },
      shared: ["react"],
    }),
  ],
  // it builds when we run npm run preview.
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
