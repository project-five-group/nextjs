module.exports = {
  extends: ['next/core-web-vitals', 'plugin:prettier/recommended', 'prettier'],
  rules: {
    'no-console': 'warn',
    'no-debugger': 'error',
    'no-nested-ternary': 'error',

    '@next/next/no-css-tags': 'off',
    '@next/next/link-passhref': 'off',

    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
      },
    ],
    'sort-imports': [
      'warn',
      {
        ignoreDeclarationSort: true,
      },
    ],

    'prettier/prettier': [
      'warn',
      {
        printWidth: 120,
        arrowParens: 'avoid',
        trailingComma: 'es5',
        tabWidth: 2,
        singleQuote: true,
      },
    ],
  },
};
