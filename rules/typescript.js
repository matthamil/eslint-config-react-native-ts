module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:@typescript-eslint/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    // Respect function hoisting
    "@typescript-eslint/no-use-before-define": ["error", { functions: false }],

    // When "on", enforces public|private|protected for React component lifecycle methods
    // in class components
    "@typescript-eslint/explicit-member-accessibility": "off",

    // Allow function return type inference
    "@typescript-eslint/explicit-function-return-type": "off",

    // Require explicit types
    "@typescript-eslint/no-explicit-any": "error"
  }
}
