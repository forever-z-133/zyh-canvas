import json from 'rollup-plugin-json';

export default {
  input: 'src/app.js',
  output: {
    file: 'dist/index.js',
    format: 'umd'
  },
  plugins: [ json() ]
};