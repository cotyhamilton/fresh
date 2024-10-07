import tailwind from "eslint-plugin-tailwindcss";
import parser from "@typescript-eslint/parser";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: parser,
    },
    plugins: {
      tailwindcss: tailwind,
    },
    rules: {
      "tailwindcss/classnames-order": "warn",
      "tailwindcss/no-contradicting-classname": "warn",
    },
  },
];
