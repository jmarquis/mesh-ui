module.exports = {

  parser: "babel-eslint",

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

    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "double"],
    "semi": ["error", "never"]

  }
};
