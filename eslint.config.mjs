import tsParser from '@typescript-eslint/parser';

// Syntax and basic correctness checks; TypeScript and build validate types/routes.
export default [
  {ignores:['node_modules/**','.next/**']},
  {
    files:['**/*.{ts,tsx}'],
    languageOptions:{parser:tsParser,parserOptions:{ecmaVersion:'latest',sourceType:'module',ecmaFeatures:{jsx:true}}},
    rules:{'no-debugger':'error','no-dupe-else-if':'error','no-duplicate-case':'error','no-unreachable':'error','valid-typeof':'error'},
  },
];
