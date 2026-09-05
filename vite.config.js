import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  server: {
    open: true
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        contact: resolve(__dirname, 'contact.html'),
        fineArt: resolve(__dirname, 'fine-art.html'),
        bloopers: resolve(__dirname, 'bloopers.html'),
        art: resolve(__dirname, 'art.html'),
        artwork: resolve(__dirname, 'artwork.html'),
        design: resolve(__dirname, 'design.html'),
      }
    }
  }
})
