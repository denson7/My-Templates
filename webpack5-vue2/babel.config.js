/**
 * Babel
 * babel-loader 是将ES6等高级语法转换为能让浏览器能够解析的低级语法
 * @babel/core 是babel的核心模块，编译器，提供转换的API
 * @babel/preset-env 可以根据配置的目标浏览器或者运行环境来自动将ES2015+的代码转换为es5
 * @babel/plugin-transform-runtime 它会帮我自动动态require @babel/runtime 中的内容
 * @babel/runtime-corejs3 就是提供统一的模块化的helper, 使用能大大减少打包编译后的体积
 * core-js JavaScript标准库的polyfill，@babel/preset-env 引用的包
 * @vue/babel-preset-jsx 支持解析vue中的jsx语法
 */
module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "usage", // 按需引入
        "corejs": 3             // corejs版本
      }
    ],
    "@vue/babel-preset-jsx"     // 支持vue中的jsx语法
  ],
  plugins: [
    [
      "@babel/plugin-transform-runtime",
      {
        "corejs": 3             // corejs版本
      }
    ]
  ]
}