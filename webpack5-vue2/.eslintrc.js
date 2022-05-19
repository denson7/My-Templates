module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true        // node环境
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/essential"
  ],
  parserOptions: {
    ecmaFeatures: {
      "jsx": true            // 支持jsx语法
    },
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: [
    "vue"
  ],
  rules: {
    semi: 'error',
    "no-console": "error"
  }
}