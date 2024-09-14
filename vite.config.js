import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/movies/movie/',  // Base path for GitHub Pages
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  }
});
