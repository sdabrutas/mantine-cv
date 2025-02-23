import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'
import stylistic from '@stylistic/eslint-plugin'

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended,
})


const eslintConfig = [
  ...compat.config({
    extends: [
      'eslint:recommended',
      'next/typescript',
      'stylistic',
      'prettier',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'next/core-web-vitals',
    ],
    rules: {
      'react/no-unescaped-entities': 'off',
      'react/react-in-jsx-scope': 'off',
      '@next/next/no-page-custom-font': 'off',
      '@stylistic/js/no-trailing-spaces': ['error', { 'ignoreComments': true }],
      'import/order': [
        'warn',
        {
          pathGroups: [
            {
              pattern: '@/**',
              group: 'internal',
              position: 'after'
            }
          ],
          pathGroupsExcludedImportTypes: ['internal', 'external', 'builtins'],
          groups: [
            'builtin',
            'external',
            'unknown',
            ['internal', 'sibling', 'parent'],
            'index',
            'object',
            'type'
          ]
        }
      ],
    },
  }),
];

export default eslintConfig;