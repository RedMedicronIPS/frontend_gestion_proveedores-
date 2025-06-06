import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(fileURLToPath(import.meta.url), '../src'),
      // Puedes agregar más alias si es necesario
      // Por ejemplo, si tienes un directorio de componentes:
      // components: path.resolve(fileURLToPath(import.meta.url), '../src/components'),
    },
  },
})
