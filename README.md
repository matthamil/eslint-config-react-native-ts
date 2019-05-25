# eslint-config-react-native-ts

![npm](https://img.shields.io/npm/v/eslint-config-react-native-ts.svg?color=blue)
![npm peer dependency eslint version](https://img.shields.io/npm/dependency-version/eslint-config-react-native-ts/peer/eslint.svg)
![dependabot](https://img.shields.io/badge/Dependabot-Enabled-brightgreen.svg)
![license](https://img.shields.io/npm/l/eslint-config-react-native-ts.svg)
[![saythanksio](https://img.shields.io/badge/Say%20Thanks-!-1EAEDB.svg)](https://saythanks.io/to/matthamil)

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
