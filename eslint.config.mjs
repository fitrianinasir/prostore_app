import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import unusedImports from "eslint-plugin-unused-imports"; // ✅ ESM-compatible import

const __filename =
  fileURLToPath(
    import.meta.url
  );
const __dirname = dirname(
  __filename
);

const compat = new FlatCompat(
  {
    baseDirectory: __dirname,
  }
);

export default [
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript"
  ),

  {
    plugins: {
      "unused-imports":
        unusedImports.default ??
        unusedImports,
    },
    rules: {
      // Disable base rule
      "@typescript-eslint/no-unused-vars":
        "off",

      // Enable plugin
      "unused-imports/no-unused-imports":
        "error",
      "unused-imports/no-unused-vars":
        [
          "warn",
          {
            vars: "all",
            varsIgnorePattern:
              "^_",
            args: "after-used",
            argsIgnorePattern:
              "^_",
          },
        ],
    },
  },
];
