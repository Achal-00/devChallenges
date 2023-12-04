import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://achal-00.github.io/devChallenges/business-blog-card",
  build: {
    outDir: "../../business-blog-card",
  },
});
