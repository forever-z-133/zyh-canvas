module.exports = {
  root: true,
  env: {
    browser: true,
    es2022: true
  },
  extends: 'standard-with-typescript',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: [
      './tsconfig.json',
      './example/tsconfig.json'
    ]
  },
  rules: {
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': 1,
    '@typescript-eslint/strict-boolean-expressions': 0,
    '@typescript-eslint/method-signature-style': 0,
    'no-new': 0
  },
  ignorePatterns: [
    'dist',
    'node_modules',
    '*.html',
    '*.json',
    '*.md'
  ]
}
