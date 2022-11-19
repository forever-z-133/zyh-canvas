import { defineConfig } from 'vite'

export default defineConfig(({ mode = 'development' }) => {
  return {
    build: {
      lib: {
        // entry: ['example/index.html'],
        entry: 'src/index.ts',
        name: 'zyh-canvas'
      }
    },
    resolve: {
      alias: {
        '@/': 'src/'
      }
    }
  }
})
