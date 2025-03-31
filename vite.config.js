
export default defineConfig({
  plugins: [react()],
  base: '/-3/', // Должно точно совпадать с названием репозитория
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
        entryFileNames: 'assets/[name]-[hash].js'
      }
    }
  }
})