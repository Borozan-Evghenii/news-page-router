import tsParser from '@typescript-eslint/parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import { fixupConfigRules } from '@eslint/compat';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

const config = [
  {
    ignores: [
      '**/dist',
      '**/node_modules/',
      '**/.next/*',
      '**/.eslintrc.cjs',
      '**/*.config.js',
      '**/*.config.ts',
      '**/*.config.mjs',
      '**/coverage'
    ]
  },
  ...compat.extends(
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
    'next/core-web-vitals',
    'next/typescript'
  ),
  {
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',

      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: './',

        ecmaFeatures: {
          jsx: true
        }
      }
    },

    rules: {
      '@typescript-eslint/no-shadow': 0,

      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          disallowTypeAnnotations: false
        }
      ],

      'react/function-component-definition': [
        2,
        {
          namedComponents: 'function-declaration',
          unnamedComponents: 'arrow-function'
        }
      ],

      'react/prop-types': 0,
      'react/react-in-jsx-scope': 0,
      'react/jsx-props-no-spreading': 0,
      'react/require-default-props': 0,
      'react/button-has-type': 0,

      'react/no-unstable-nested-components': [
        2,
        {
          allowAsProps: true
        }
      ],

      'react/no-array-index-key': 0,
      'no-param-reassign': 0,
      'no-restricted-syntax': 0,
      '@typescript-eslint/no-loop-func': 0,

      'react/jsx-filename-extension': [
        2,
        {
          extensions: ['.js', '.jsx', '.ts', '.tsx']
        }
      ],

      'react/jsx-sort-props': [
        2,
        {
          callbacksLast: true,
          shorthandFirst: true,
          multiline: 'last',
          ignoreCase: true,
          reservedFirst: true
        }
      ],

      'import/extensions': 0,
      'import/no-extraneous-dependencies': 0,
      'import/prefer-default-export': 0,
      'import/export': 0,

      'import/order': [
        2,
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'always',

          pathGroups: [
            {
              pattern: '@/**',
              group: 'internal'
            }
          ],

          alphabetize: {
            order: 'asc'
          }
        }
      ]
    }
  },
  {
    files: ['**/*.ts', '**/*.tsx']
  }
];

export default fixupConfigRules([...config]);
