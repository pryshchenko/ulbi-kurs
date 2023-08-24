module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:i18next/recommended'
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        '@typescript-eslint',
        'i18next',
    ],
    "rules": {
        'react/jsx-indent': [2, 4],
        'indent': [2, 4],
        'react/jsx-filename-extension': [2, { "extensions": [".js", ".jsx", ".tsx"] }],
        'import/no-unresolved': "off",
        'import/prefer-default-export': "off",
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "warn",
        'i18next/no-literal-string': ['error', {markupOnly: true}]
    },
    root: true,
    parser: '@typescript-eslint/parser',
}
