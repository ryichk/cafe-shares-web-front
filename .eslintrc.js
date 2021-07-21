module.exports = {
  extends: [
    'next',
    'next/core-web-vitals',
    'prettier',
    'plugin:import/recommended',
    'plugin:import/warnings',
  ],
  rules: {
    semi: 'error',
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
        },
      },
    ],
  },
};
