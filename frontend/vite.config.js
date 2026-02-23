import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite config tuned for a SPA with React Router.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
      },
    },
  },
});

