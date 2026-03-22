/* eslint-env node */
const nextConfig = require('eslint-config-next');

module.exports = [
  ...nextConfig,
  {
    settings: {
      react: {version: '19.0.0'},
    },
    rules: {
      'react/display-name': 'off',
      'react/no-unescaped-entities': 'off',
      'react-memo/require-memo': 'off',
    },
  },
];
