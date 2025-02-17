import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "https://skrigel.github.io",
  build: {
    outDir: "dist",
  },
});
