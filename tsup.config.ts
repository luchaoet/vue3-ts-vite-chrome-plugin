import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    'js/content': 'dist/js/content.js',
    'background/index': 'src/background/index.ts',
    'background/hot-reload': 'src/background/hot-reload.ts'
  },
  outExtension({ format }) {
    return {
      js: `.js`
    }
  },
})
