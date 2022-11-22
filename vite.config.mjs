import { defineConfig } from 'vite'

export default defineConfig(({ mode = 'development' }) => {
  const isDev = mode === 'development'
  const srcDir = isDev ? '../../src/' : './src/'

  return {
    server: {
      port: 3000,
      open: '/example/index.html'
    },
    build: {
      lib: {
        entry: 'src/index.ts',
        name: 'zyh-canvas'
      }
    },
    resolve: {
      alias: {
        '@/': srcDir
      },
      extensions: ['.mjs', '.js', '.ts', '.json']
    }
  }
})
