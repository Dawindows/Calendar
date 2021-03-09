module.exports = {
    "root": true,
    "extends": [
        "airbnb-base", 
        "prettier",
    ],
    "env": {
        "browser": true,
        "es2021": true,
        "jest/globals": true,
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module",
    },
    "plugins": [
        "prettier",
        "jest",
      ],
    "rules": {
        "linebreak-style": ["error", "windows"],
        "linebreak-style": ["error", "unix"],
        "import/prefer-default-export": "off",
        "import/no-cycle": "off",
        "no-underscore-dangle":  ["error", { "allow": ["_isAdmin"]}],
        "func-names": ["error", "never"],
        "no-param-reassign": [2, {"props": false}],
        "max-classes-per-file": ["error", 1],
        "prettier/prettier": "error",
    }
};