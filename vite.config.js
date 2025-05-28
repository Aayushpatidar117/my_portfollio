import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import javascriptImg from "./src/assets/Images/stack/javascript.svg";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(javascriptImg, "./src"),
    },
  },
});
