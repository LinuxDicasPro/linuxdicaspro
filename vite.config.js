import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
    server: {
        host: 'localhost',
        port: 5000,
    },
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    react: ['react', 'react-dom'],
                    motion: ['framer-motion'],
                    markdown: ['react-markdown', 'remark-gfm']
                }
            }
        }
    }
})
