import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// base: './' keeps asset paths relative, so the build works on any host or sub-folder
export default defineConfig({
  plugins: [react()],
  base: './',
})
