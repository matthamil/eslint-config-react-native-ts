module.exports = {
  extends: [
    "plugin:react/recommended"
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    // Prevent usage of React APIs that are unstable or will be deprecated
    "react/no-unsafe": "error"
  },
  settings: {
    react: {
      version: "detect"
    }
  }
}