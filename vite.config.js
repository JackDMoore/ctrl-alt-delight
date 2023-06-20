import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import commonjs from '@rollup/plugin-commonjs';
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
  },
  plugins: [
    commonjs()
  ]
});



// import react from "@vitejs/plugin-react";
// import { defineConfig } from "vite";

// export default defineConfig({
//   plugins: [react()],
//   build: {
//     rollupOptions: {
//       input: {
//         main: "./src/main.jsx",
//       },
//     },
