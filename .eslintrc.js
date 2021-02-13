module.exports = {
    "root": true,
    "extends": "airbnb-base",
    "env": {
        "browser": true,
        "es2021": true
    },
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "rules": {
        "linebreak-style": ["error", "windows"],
        "import/prefer-default-export": "off"
    }
};