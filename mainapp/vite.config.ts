import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "mainapp",
      remotes: {
        serviceone: "http://localhost:5001/assets/remoteEntryOne.js",//(product)
        servicetwo: "http://localhost:5002/assets/remoteEntryTwo.js",//(cart)
        servicethree:"http://localhost:5003/assets/remoteEntryThree.js",//(payment)
        servicefour: "http://localhost:5004/assets/remoteEntryFour.js",//(support)
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
});
