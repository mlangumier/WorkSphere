const prettierConfig = {
  trailingComma: "es5",
  tabWidth: 2,
  useTabs: false,
  printWidth: 120,
  bracketSpacing: true,
  arrowParens: "avoid",
  semi: true,
  singleQuote: false,
  jsxSingleQuote: false,
  quoteProps: "as-needed",

  tailwindConfig: "./src/styles/globals.css",
  tailwindFunctions: ["clsx"],

  plugins: ["prettier-plugin-tailwindcss"],

  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      options: {
        parser: "typescript",
        singleQuote: true,
      },
    },
    {
      files: ["*.js", "*.mjs"],
      options: {
        singleQuote: true,
      },
    },
    {
      files: "*.json",
      options: {
        parser: "json",
      },
    },
  ],
};

export default prettierConfig;
