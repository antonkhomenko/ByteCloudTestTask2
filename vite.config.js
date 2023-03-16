import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/ByteCloudTestTask2/',
  plugins: [react()],
  server: {
    host: true
  }
})
