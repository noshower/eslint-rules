module.exports = {
  rules: {
    // 规则：要求或禁止使用严格模式指令
    // 在 ECMAScript 模块中，总是处于严格模式语义下，严格模式指令也就没必要了
    strict: ['error', 'never'] // 禁用严格模式指令
  }
};
