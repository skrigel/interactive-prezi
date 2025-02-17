import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/interactive-prezi/",
  build: {
    outDir: "dist",
  },
});
