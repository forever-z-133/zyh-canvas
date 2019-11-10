import json from 'rollup-plugin-json'; /* 支持 json 文件引用 */
import resolve from 'rollup-plugin-node-resolve'; /* 支持 exports default */
import commonjs from 'rollup-plugin-commonjs'; /* 支持 module.exports */
import babel from "rollup-plugin-babel"; /* 支持 babel 转化 */

const env = process.env.NODE_ENV;
const isProduction = env === 'production';

const babelConfig = isProduction ? [babel({
  exclude: 'node_modules/**' // 只编译我们的源代码
})] : [];

export default {
  input: {
    index: 'src/index.js'
  },
  output: [{
    dir: 'dist',
    format: 'umd',
    name: 'app'
  }],
  plugins: [
    json(),
    commonjs(),
    resolve({
      // 将自定义选项传递给解析插件
      customResolveOptions: {
        moduleDirectory: 'node_modules'
      }
    }),
    ...babelConfig
  ],
};