module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'key-spacing': [ 'error', { 'beforeColon': false } ],
    'array-bracket-spacing': [ 'error', 'always' ],
    'quote-props': 0,
    'no-alert': 0,
    'semi': [ 2, 'never' ],
    'max-len': [ 1, 200, 2 ],
    'linebreak-style': [ 0, 'windows' ],
    'react/prefer-stateless-function': [ 1, { 'ignorePureComponents': true } ],
    'react/jsx-filename-extension': [ 0 ],
    'react/jsx-wrap-multilines': [ 0 ],
    'function-paren-newline': [ 0 ],
    'jsx-a11y/anchor-is-valid': [ 0 ],
    'object-curly-newline': [ 0 ],
    'implicit-arrow-linebreak': [ 0 ],
    'react/prop-types': [ 0 ],
    'react/jsx-fragments': [ 0 ],
    'global-require': [ 0 ],
    'arrow-parens': [ 0 ],
    'react/jsx-one-expression-per-line': [ 0 ],
    'import/prefer-default-export': [ 0 ],
    'no-confusing-arrow': [ 0 ],
  },
}
