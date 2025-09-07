import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
  },
  server: {
    proxy: {
      '/api/scouting': {
        target: 'https://api.scouting.org',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/scouting/, ''),
        secure: true
      }
    }
  }
})