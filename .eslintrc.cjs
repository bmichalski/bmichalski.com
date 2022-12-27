// eslint-disable-next-line unicorn/prefer-module
module.exports = {
  plugins: [
    '@typescript-eslint',
    'eslint-comments',
    'promise',
    'unicorn',
    'prettier',
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:eslint-comments/recommended',
    'plugin:promise/recommended',
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:unicorn/all',
    'prettier',
  ],
  env: {
    node: true,
  },
  root: true,
  parser: '@typescript-eslint/parser',
  ignorePatterns: ['node_modules'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'class-methods-use-this': 'off',
    // BEGIN override rules from eslint-config-airbnb-base
    curly: ['error', 'all'],
    eqeqeq: ['error', 'always'],
    'no-alert': 'error',
    'no-eq-null': 'error',
    'no-implicit-coercion': 'error',
    'no-implicit-globals': 'error',
    'no-invalid-this': 'error',
    'no-labels': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-useless-call': 'error',
    'prefer-object-has-own': 'error',
    'handle-callback-err': 'error',
    'no-sync': 'error',
    // END airbnb rule override to be stricter
    // Override airbnb rule to all for..of
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'LabeledStatement',
        message:
          'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message:
          '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],
    // https://github.com/basarat/typescript-book/blob/master/docs/tips/defaultIsBad.md
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
    /**
     * Always require file extension.
     * It forces us to use the /index.js suffix when importing a folder,
     * because importing a folder without the /index.js suffix is not supported
     * resolving ES modules.
     */
    'import/extensions': ['error', 'always'],
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          kebabCase: true,
        },
      },
    ],
    'prettier/prettier': [
      'error',
      {},
      {
        usePrettierrc: true,
      },
    ],
  },
  overrides: [
    {
      files: ['*.js', '*.mjs', '*.ts', '*.mts'],
    },
  ],
};
