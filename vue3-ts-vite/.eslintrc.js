module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended'
  ],
  /**
   * "off" or 0 - 关闭规则
   * "warn" or 1 - 警告
   * "error" or 2 - 错误
   */
  rules: {
    // 不使用分号
    semi: ['error', 'never'],
    // 强制使用单引号
    quotes: ['error', 'single'],
    // 强制使用 === 和 !==
    eqeqeq: 2,
    // 操作符周围必须有空格
    'space-infix-ops': 2,
    // 注释后面必须跟随至少一个空白
    'spaced-comment': ['error', 'always'],
    // 声明变量必须赋值
    'init-declarations': ['error', 'always'],
    // 强制箭头函数的箭头前后使用空格
    'arrow-spacing': ['error', { before: true, after: true }],
    // 禁止使用 var 声明变量
    'no-var': 2,
    // 使用 const 声明那些声明后不再被修改的变量
    'prefer-const': 2,
    // 要求使用剩余参数而不是 arguments
    'prefer-rest-params': 2,
    // 要求使用对象方法名和属性名简写
    'object-shorthand': 2,
    // 要求回调函数使用箭头函数
    'prefer-arrow-callback': 2,
    // 禁止出现空函数
    'no-empty-function': 1,
    // 强制在parseInt()使用基数参数
    radix: 1,
    // 要求 switch 语句中有 default 分支
    'default-case': 1,
    // 禁止 if 语句中 return 语句之后有 else 块
    'no-else-return': 2,
    // 函数名称或function关键字与开始参数之间允许有空格
    'space-before-function-paren': ['error', { anonymous: 'never', named: 'never', asyncArrow: 'always' }],
    // 禁止末尾逗号
    'comma-dangle': ['error', 'never'],
    // 对象冒号前禁止空格，冒号后必须空格
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],
    // 要求文件末尾存在空行
    'eol-last': 2,
    // 关键字（if、else等）前后必须有空格
    'keyword-spacing': ['error', { before: true, after: true }],
    // 禁止出现多行空行
    'no-multiple-empty-lines': ['error', { max: 3 }],

    // Vue 规则
    'vue/multi-word-component-names': [
      'off',
      {
        ignores: []
      }
    ]
  }
}
