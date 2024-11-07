import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 4455,
  },
  build: {
    assetsInlineLimit: 100 * 1024, // 指定大小尺寸以下的图片会被转换为base64
  },
});
