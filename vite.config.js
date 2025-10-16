import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',
  build: {
    minify: 'terser', // Força o uso do Terser
    terserOptions: {
      compress: {
        keep_fnames: true, // Evita renomeação agressiva
      },
      mangle: {
        keep_fnames: true, // Preserva nomes de funções
      },
    },
  },
})
