import { defineConfig } from 'vite'

export default defineConfig(({ mode = 'development' }) => {
  const isDev = mode === 'development'
  const alias = isDev ? { '@/': '../../src/' } : undefined

  return {
    server: {
      port: 3000,
      open: '/example/index.html'
    },
    build: {
      lib: {
        entry: 'src/index.ts',
        name: 'zyh-canvas',
        fileName: 'zyh-canvas'
      }
    },
    resolve: {
      alias, /* build 若开启 alias 会不支持 /a 自动识别为 /a/index.ts */
      extensions: ['.mjs', '.js', '.ts', '.json']
    }
  }
})
