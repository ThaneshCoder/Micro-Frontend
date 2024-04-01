import federation from "@originjs/vite-plugin-federation";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    federation({
      name: "servicefour",
      filename: "remoteEntryFour.js",
      exposes: {
        "./App": "./src/App.tsx",
      },
      shared: ["react"],
    }),
  ],


  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
})
