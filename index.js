module.exports = {
  extends: [
    './rules/import',
    './rules/react-hooks',
    './rules/react-native-a11y',
    './rules/react-native',
    './rules/react',
    './rules/typescript',
    './rules/style'
  ].map(require.resolve),
  rules: {}
}
