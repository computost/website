// @ts-check

import eslint from "@eslint/js";
import eslintPluginPerfectionist from "eslint-plugin-perfectionist";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";
import eslintPluginReact from "eslint-plugin-react";
import globals from "globals";
import typescriptEslint from "typescript-eslint";

export default typescriptEslint.config(
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
  },
  {
    ignores: [".react-router", ".wrangler", "build"],
  },
  eslint.configs.recommended,
  typescriptEslint.configs.strictTypeChecked,
  typescriptEslint.configs.stylisticTypeChecked,
  eslintPluginPerfectionist.configs["recommended-natural"],
  eslintPluginPrettier,
  eslintPluginReact.configs.flat.recommended,
  eslintPluginReact.configs.flat["jsx-runtime"],
  {
    rules: {
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/restrict-template-expressions": [
        "error",
        { allowNumber: true },
      ],
      "perfectionist/sort-exports": ["off"],
      "perfectionist/sort-modules": ["off"],
      "perfectionist/sort-objects": [
        "error",
        {
          customGroups: [{ elementNamePattern: "^id$", groupName: "id" }],
          groups: ["id", "unknown"],
        },
      ],
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parserOptions: {
        projectService: {
          allowDefaultProject: [
            "drizzle.config.ts",
            "eslint.config.js",
            "playwright.config.ts",
            "react-router.config.ts",
            "vitest.config.ts",
          ],
          defaultProject: "tsconfig.cloudflare.json",
        },
      },
    },
  },
);
