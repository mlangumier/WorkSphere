// import { dirname } from "path";
// import { fileURLToPath } from "url";
// import { FlatCompat } from "@eslint/eslintrc";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const compat = new FlatCompat({
//   baseDirectory: __dirname,
// });

// const eslintConfig = [
//   ...compat.extends("next/core-web-vitals", "next/typescript", "prettier"),
// ];

// export default eslintConfig;

import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

import prettierConfig from "eslint-config-prettier";
import eslingPluginPrettierRecommmended from "eslint-plugin-prettier/recommended";
import react from "eslint-plugin-react";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

const eslintConfig = [
  ...compat.extends(
    "next",
    "next/core-web-vitals",
    "next/typescript",
    "plugin:react/recommended",
    "prettier",
  ),
  {
    ignores: ["./docker-compose.yml", "./Dockerfile.dev", "**/.*"],
  },
  {
    plugins: {
      react,
      "@typescript-eslint": typescriptEslint,
    },

    rules: {
      "react/jsx-props-no-spreading": "off",
      "react/jsx-filename-extension": [
        1,
        {
          extensions: [".ts", ".tsx", ".js", ".jsx", ".mjs"],
        },
      ],
      // Shows an error if using Next.js' navigation tools instead of Next-intl's.
      "no-restricted-imports": [
        "error",
        {
          name: "next/link",
          message: "Please import from `@/navigation` instead.",
          importNames: ["default"],
        },
        {
          name: "next/navigation",
          message: "Please import from `@/navigation` instead.",
          importNames: [
            "redirect",
            "permanentRedirect",
            "userRouter",
            "usePathname",
          ],
        },
      ],
    },
  },
  {
    files: ["**/*.{js,jsx,ts,tsx,mjs}"],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
  },

  prettierConfig,
  eslingPluginPrettierRecommmended,
];

export default eslintConfig;
