module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "linebreak-style": "off",
    "react/jsx-filename-extension": "off",
    "max-len": ["error", { "code": 200 }],
    "react/no-array-index-key": "off",
    "react/prop-types": "off"
  },
};
