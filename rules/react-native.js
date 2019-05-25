module.exports = {
  plugins: ["react-native"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    // Detect unused StyleSheet rules
    "react-native/no-unused-styles": "error",

    // Detect raw text outside of <Text /> components
    "react-native/no-raw-text": "error",

    // Require variable names for color values
    "react-native/no-color-literals": "error"
  },
  env: {
    // Allow all browser-like globals
    "react-native/react-native": true
  }
}