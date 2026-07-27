import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import viteCompression from 'vite-plugin-compression'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    viteCompression({ algorithm: 'gzip', ext: '.gz' }),
    viteCompression({ algorithm: 'brotliCompress', ext: '.br' }),
  ],
  build: {
    target: 'es2022',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return
          if (/react-router|\/react\/|\/react-dom\//.test(id)) return 'vendor-react'
          if (/framer-motion|gsap/.test(id)) return 'vendor-motion'
          if (/react-hook-form|@hookform|zod/.test(id)) return 'vendor-forms'
          if (/swiper/.test(id)) return 'vendor-swiper'
          return 'vendor'
        },
      },
    },
  },
})
