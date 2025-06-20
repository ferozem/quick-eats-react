import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Base path is required so assets load correctly when hosted from
  // a subdirectory like GitHub Pages.
  base: '/quick-eats-react/',
  plugins: [react()],
})
