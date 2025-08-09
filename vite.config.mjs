import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/React_Todo_List/",
  plugins: [react()],
});
