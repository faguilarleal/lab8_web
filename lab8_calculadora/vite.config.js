import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  resolve: {
    '@components': '/src/components'
  },
  test: {
    environment: 'jsdom',
    setupFiles: './setupTests.js'
  }
})