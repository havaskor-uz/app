module.exports = {
  extends: ['mantine', 'plugin:@next/next/recommended', 'plugin:prettier/recommended', 'plugin:tailwindcss/recommended'],
  plugins: ['tailwindcss'],
  overrides: [
    {
      files: ['**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react'],
    },
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'import/extensions': 'off',
  },
};
