export default {
  singleQuote: true,
  trailingComma: "es5",
  tabWidth: 4,
  bracketSpacing: false,
  arrowParens: "always",
  printWidth: 160,
  overrides: [
    {
      files: ["*.html", "*.json"],
      options: {
        tabWidth: 2,
      },
    },
  ],
};
