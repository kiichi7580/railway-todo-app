module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true,
        "jest/globals": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "prettier"
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
        "jest",
    ],
    "rules": {
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off"
}
        // "@typescript-eslint/no-implicit-any": "off",
        // "@typescript-eslint/explicit-module-boundary-types": "off",
    }
