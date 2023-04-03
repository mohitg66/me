import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/me/',
  assetsInclude: ["src/assets/*.svg", "src/assets/*.png", "src/assets/*.jpg"],
})
