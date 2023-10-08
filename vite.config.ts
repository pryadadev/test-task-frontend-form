import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@fonts": path.resolve(__dirname, "./src/fonts"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@icons": path.resolve(__dirname, "./src/icons"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@types.ts": path.resolve(__dirname, "./src/types.ts"),
      "@utils": path.resolve(__dirname, "./src/utils"),
    },
  },
  base: "./",
  plugins: [react()],
});