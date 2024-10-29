import typescriptEslintParser from '@typescript-eslint/parser';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintPluginTypescript from '@typescript-eslint/eslint-plugin';

export default [
  {
    files: ['**/*.ts', '**/*.js'],
    ignores: ['node_modules/'],
    languageOptions: {
      parser: typescriptEslintParser,
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    plugins: {
      '@typescript-eslint': eslintPluginTypescript,
      prettier: eslintPluginPrettier,
    },
    rules: {
      ...eslintPluginPrettier.configs.recommended.rules,
      ...eslintPluginTypescript.configs.recommended.rules,
      'prettier/prettier': 'error',
    },
  },
];
