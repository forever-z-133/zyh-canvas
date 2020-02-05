import path from 'path';
import json from 'rollup-plugin-json'; /* 支持 json 文件引用 */
import resolve from 'rollup-plugin-node-resolve'; /* 支持 exports default */
import commonjs from 'rollup-plugin-commonjs'; /* 支持 module.exports */
import babel from 'rollup-plugin-babel'; /* 支持 babel 转化 */
import alias from 'rollup-plugin-alias'; /* 路径别名 */

const env = process.env.NODE_ENV;
const isProduction = env === 'production';

const babelConfig = isProduction ? [babel({ exclude: 'node_modules/**' })] : [];

export default {
  input: {
    index: 'src/index.js'
  },
  output: {
    dir: 'dist',
    format: 'umd',
    name: 'zyh'
  },
  plugins: [
    json(),
    commonjs(),
    resolve({
      customResolveOptions: { moduleDirectory: 'node_modules' }
    }),
    alias({
      entries: {
        '~': __dirname,
        '@': path.join(__dirname, 'src')
      }
    }),
    ...babelConfig
  ]
};
