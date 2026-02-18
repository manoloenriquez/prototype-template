/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["eslint:recommended", "prettier"],
  env: { node: true, es2022: true },
  overrides: [
    {
      // TypeScript files across all packages
      files: ["**/*.ts", "**/*.tsx"],
      parser: "@typescript-eslint/parser",
      parserOptions: { project: true },
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "prettier",
      ],
      plugins: ["@typescript-eslint"],
      rules: {
        "@typescript-eslint/no-unused-vars": [
          "error",
          { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
        ],
        "@typescript-eslint/consistent-type-imports": [
          "error",
          { prefer: "type-imports", fixStyle: "inline-type-imports" },
        ],
        "@typescript-eslint/no-misused-promises": [
          "error",
          { checksVoidReturn: { attributes: false } },
        ],
      },
    },
    {
      // Next.js web app
      files: ["apps/web/**/*.ts", "apps/web/**/*.tsx"],
      extends: ["next/core-web-vitals"],
      settings: { next: { rootDir: "apps/web" } },
    },
    {
      // React Native / Expo mobile app
      files: ["apps/mobile/**/*.ts", "apps/mobile/**/*.tsx"],
      env: { "react-native/react-native": true },
      plugins: ["react", "react-hooks"],
      rules: {
        "react/react-in-jsx-scope": "off",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
      },
    },
  ],
  ignorePatterns: [
    "node_modules/",
    "dist/",
    ".next/",
    ".expo/",
    "*.config.js",
    "*.config.ts",
    "babel.config.js",
  ],
};
