import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import importX from 'eslint-plugin-import-x'
import perfectionist from 'eslint-plugin-perfectionist'
import unicorn from 'eslint-plugin-unicorn'
import sonarjs from 'eslint-plugin-sonarjs'
import promise from 'eslint-plugin-promise'
import featureSliced from '@conarti/eslint-plugin-feature-sliced'
import prettier from 'eslint-config-prettier'
import { defineConfig, globalIgnores } from 'eslint/config'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig([
  globalIgnores([
    'dist',
    'build',
    'coverage',
    'node_modules',
    '.idea',
    '.vite',
    'eslint.config.js',
  ]),

  prettier,
  js.configs.recommended,
  reactHooks.configs['recommended-latest'],
  reactRefresh.configs.vite,

  ...tseslint.configs.recommended,

  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: { ...globals.browser, JSX: true },
      parserOptions: { project: false },
    },

    plugins: {
      'import-x': importX,
      perfectionist,
      unicorn,
      sonarjs,
      promise,
      '@conarti/feature-sliced': featureSliced,
    },

    rules: {
      'quotes': ['error', 'single', { 'avoidEscape': true, 'allowTemplateLiterals': true }],
      'jsx-quotes': ['error', 'prefer-double'],

      semi: ['error', 'never'],

      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-debugger': 'warn',
      eqeqeq: ['error', 'smart'],
      'arrow-body-style': ['error', 'as-needed'],
      'object-shorthand': ['error', 'always'],

      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/ban-ts-comment': [
        'warn',
        { 'ts-expect-error': 'allow-with-description' },
      ],
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports', disallowTypeAnnotations: false },
      ],

      'import-x/first': 'error',
      'import-x/no-duplicates': 'error',
      'import-x/no-self-import': 'error',
      'import-x/newline-after-import': 'error',
      'import-x/no-default-export': 'error',

      'perfectionist/sort-imports': [
        'error',
        {
          type: 'natural',
          order: 'asc',
          ignoreCase: true,
          groups: [
            ['builtin', 'external'],
            ['internal'],
            ['parent', 'sibling', 'index'],
            ['side-effect'],
            ['style', 'unknown'],
          ],
          newlinesBetween: 'always',
        },
      ],

      'unicorn/prefer-optional-catch-binding': 'error',
      'unicorn/no-useless-undefined': 'error',
      'unicorn/filename-case': ['error', { cases: { camelCase: true, pascalCase: true } }],
      'sonarjs/no-duplicate-string': 'warn',
      'sonarjs/no-identical-functions': 'warn',
      'promise/no-nesting': 'warn',

      '@conarti/feature-sliced/layers-slices': [
        'error',
        { layers: ['app', 'pages', 'widgets', 'features', 'entities', 'shared'] },
      ],
      '@conarti/feature-sliced/public-api': 'error',
      '@conarti/feature-sliced/absolute-relative': 'error',

      'no-restricted-imports': [
        'error',
        {
          paths: [
            {
              name: 'react-redux',
              importNames: ['useDispatch', 'useSelector'],
              message: 'Use typed hooks from /api/*.ts',
            },
            {
              name: 'redux',
              message: 'Direct redux imports is forbidden. Use @reduxjs/toolkit',
            },
          ],
        },
      ],
    },

    settings: {
      'import-x/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },
      'import-x/resolver': {
        typescript: {
          project: ['./tsconfig.json'],
          alwaysTryTypes: true,
        },
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
  },

  {
    files: ['**/*.{ts,tsx}'],
    ignores: ['**/*.config.*', 'vite.config.ts'],
    languageOptions: {
      parserOptions: {
        project: path.join(__dirname, 'tsconfig.json'),
        tsconfigRootDir: __dirname,
      },
    },
    rules: {
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: false }],
      '@typescript-eslint/prefer-nullish-coalescing': 'error',
      '@typescript-eslint/prefer-optional-chain': 'error',
      '@typescript-eslint/await-thenable': 'error',
    },
  },

  {
    files: ['**/*.config.{ts,js,mjs,cjs}', '**/vite-env.d.ts'],
    rules: {
      'import-x/no-default-export': 'off',
      'unicorn/filename-case': 'off',
      '@typescript-eslint/await-thenable': 'off',
      '@typescript-eslint/no-floating-promises': 'off',
      '@typescript-eslint/no-misused-promises': 'off',
    },
  },
])
