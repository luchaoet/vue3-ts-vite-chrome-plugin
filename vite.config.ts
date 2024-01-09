import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    // watch: {},
    target: 'es2015',
    // emptyOutDir: true,
    cssCodeSplit: true,
    sourcemap: false,
    rollupOptions: {
      input: {
        content: 'src/content/index.ts',
        popup: 'src/popup/index.html',
        options: 'src/options/index.html',
        devtools: 'src/devtools/index.html',
        panel1: 'src/devtools/panel1/index.html',
        panel2: 'src/devtools/panel2/index.html',
      },
      output: {
        chunkFileNames: 'js/[name].js',
        entryFileNames: 'js/[name].js',
        assetFileNames: 'css/[name].css'
      }
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "src/styles/element.scss";`,
      },
    },
  },
})
