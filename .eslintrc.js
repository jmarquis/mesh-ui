module.exports = {

  parser: "babel-eslint",

  parserOptions: {
    sourceType: "module"
  },

  plugins: [
    "react"
  ],

  extends: [
    "eslint:recommended",
    "plugin:react/recommended"
  ],

  env: {
    browser: true,
    es6: true,
    node: true
  },

  rules: {

    indent: ["error", 2, {
      SwitchCase: 1
    }],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "double"],
    "semi": ["error", "never"]

  }
}
