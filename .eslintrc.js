module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-alert': 'off',
    'no-param-reassign': 'off',
    'max-len': ['error', 120],
    'vue/html-indent': [
      'error', 2, {
        attribute: 2,
        closeBracket: 0,
        alignAttributesVertically: false,
        ignores: [],
      },
    ],
    'vue/max-attributes-per-line': [2, {
      singleline: 1,
      multiline: {
        max: 1,
        allowFirstLine: true,
      },
    }],
    'vue/html-self-closing': ['error', {
      html: {
        void: 'never',
        normal: 'never',
        component: 'never',
      },
    }],
    'vue/html-closing-bracket-newline': ['error', {
      singleline: 'never',
      multiline: 'never',
    }],
    'vue/script-indent': ['error', 2, { baseIndent: 1 }],
  },
  overrides: [{
    files: ['*.vue'],
    rules: {
      indent: 'off',
      'vue/script-indent': ['error', 2, {
        baseIndent: 1,
        switchCase: 1,
      }],
    },
  }],
  parserOptions: {
    parser: 'babel-eslint',
  },
};
