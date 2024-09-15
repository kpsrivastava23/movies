import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  server: {
    port: 5173, // Use PORT environment variable or fallback to 5173
    host: '0.0.0.0', // Bind to all network interfaces
  },
});
