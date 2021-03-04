module.exports = {
    "root": true,
    "extends": "airbnb-base",
    "env": {
        "browser": true,
        "es2021": true
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "rules": {
        "linebreak-style": ["error", "windows"],
        "import/prefer-default-export": "off",
        "import/no-cycle": "off",
        "max-classes-per-file": ["error", 1],
        "no-underscore-dangle":  ["error", { "allow": ["_isAdmin"]}],
        "func-names": ["error", "never"],
        "no-param-reassign": [2, {"props": false}]
    }
};