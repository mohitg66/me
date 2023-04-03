import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import reactRefresh from '@vitejs/plugin-react-refresh'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import ghPages from 'vite-plugin-gh-pages'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

