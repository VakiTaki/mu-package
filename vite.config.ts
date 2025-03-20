import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true, // Добавляет `types` в `package.json`
      outDir: "dist", // Куда сохранять `.d.ts`
    }),
  ],
  build: {
    lib: {
      entry: "src/main.tsx",
      name: "mu-package",
      formats: ["es", "cjs"], // Поддерживаемые форматы
      fileName: (format) => `mu-package.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
