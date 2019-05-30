// 中文eslint规则: cn.eslint.org/docs/rules
module.exports = {
  // 语法解析器
  "parser": "@typescript-eslint/parser",
  // 真正的解析插件
  "plugins": ["@typescript-eslint"],
  // 制定规则
  "rules":　{
    // 使用var就报错
    "no-var": "error",
    // 不要出现多余的分号
    "no-extra-semi": "error",
    // 缩进2个空格
    "@typescript-eslint/indent":["error",2]
  },
  // 解析ES6import这个写法的 选项
  "parserOptions": {
    // 解析ES6语法
    "ecmaVersion":6,
    // 源代码类型是模块module
    "sourceType": "module",
    // 让支持模块块写法,就import的使用
    "ecmaFeatures": {
      "module": true
    }
  }
}