export default defineConfig({
  base: '/movies/', // Necessary for GitHub Pages
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
});
