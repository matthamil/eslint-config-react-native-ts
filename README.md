# eslint-config-react-native-ts

An opinionated [ESLint](https://eslint.org/) config for [React Native](https://facebook.github.io/react-native/) projects using [TypeScript](https://www.typescriptlang.org/)

Includes rules for:
* [React Native](https://facebook.github.io/react-native/)
* [React hooks](https://reactjs.org/docs/hooks-rules.html) 🎣
* [TypeScript](https://www.typescriptlang.org/)
* [a11y](https://github.com/FormidableLabs/eslint-plugin-react-native-a11y).

## Installation

Install `eslint-config-react-native-ts`:

```sh
yarn add --dev eslint-config-react-native-ts 
```

Install the required peer dependencies:

```sh
yarn add --dev @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser \
  eslint \
  eslint-plugin-react \
  eslint-plugin-react-hooks \
  eslint-plugin-react-native \
  eslint-plugin-react-native-a11y
```

## Usage

In your project's `.eslintrc.*` file, add the following:

```js
{
  "extends": ["react-native-ts"],
  "rules": {
    // Your project's overrides and other rules
  }
}
```

## License

eslint-config-react-native-ts is licensed under the [MIT License](LICENSE.md).
