const confusingBrowserGlobals = require('confusing-browser-globals');

module.exports = {
  rules: {
    // 规则：在变量声明中要求或禁止初始化
    // https://eslint.org/docs/rules/init-declarations
    'init-declarations': 'off',

    // 规则：不允许在 catch 语句中覆盖外部变量名
    // 理由：在 IE 8 及更早的版本，catch 子句的参数可以覆盖一个外部的同名变量的值。
    // https://eslint.org/docs/rules/no-catch-shadow'
    'no-catch-shadow': 'off',

    // 规则：禁止删除变量
    // 理由：delete 的目的是删除对象的属性。使用 delete 操作删除一个变量可能会导致意外情况发生。
    // https://eslint.org/docs/rules/no-delete-var
    'no-delete-var': 'error',

    // 规则：禁止与变量共享名称的label
    // 理由：通过禁止使用同一作用域下的同名的变量做为标签，来创建更清晰的代码
    // https://eslint.org/docs/rules/no-label-var
    'no-label-var': 'error',

    // 规则：禁用特定的全局变量
    // 有更好的替代方案：比如 全局的isNaN，可以使用Number.isNaN 替代
    // https://eslint.org/docs/rules/no-restricted-globals
    'no-restricted-globals': ['error', 'isFinite', 'isNaN'].concat(confusingBrowserGlobals),

    // 规则：禁止同一作用域里局部变量和全局变量同名
    // https://eslint.org/docs/rules/no-shadow
    'no-shadow': 'error',

    // 规则：关键字不能被遮蔽，即不能定义与全局变量相同的变量名。
    // 理由：将局部变量的名字和一个全局变量的名字一样，容易产生意想不到的错误，和容易迷惑读者
    // https://eslint.org/docs/rules/no-shadow-restricted-names
    'no-shadow-restricted-names': 'error',

    // 规则：禁用未声明的变量，除非它们在 /*global */ 注释中被提到
    // 理由：可以定位由变量漏写、参数名漏写和意外的隐式全局变量声明所导致的潜在引用错误（比如，在 for 循环语句中初始化变量忘写 var 关键字）
    // https://eslint.org/docs/rules/no-undef
    'no-undef': 'error',

    // 规则：不允许初始化变量值为 undefined 
    // 理由：在 JavaScript 中，声明一个变量但未初始化，变量会自动获得 undefined 作为初始值。因此最好的做法是避免初始化变量值为 undefined。
    // https://eslint.org/docs/rules/no-undef-init
    'no-undef-init': 'error',

    // 规则：不允许使用undefined作为标识符
    // undefined 变量在 JavaScript 中是独一无二的，因为它实际上是一个全局对象属性。
    // 在 ECMAScript 3 中，可重写 undefined 的值，然而 ECMAScript 5 不允许重写 undefined ，但仍然可能遮盖原来的 undefined，
    // https://eslint.org/docs/rules/no-undefined
    // TODO: enable? 
    // 个人看法：启用这个配置
    'no-undefined': 'error',

    // 规则：禁止出现未使用过的变量
    // 理由：已声明的变量在代码里未被使用过，就像是由于不完整的重构而导致的遗漏错误。这样的变量增加了代码量，并且混淆读者。
    // https://eslint.org/docs/rules/no-unused-vars
    'no-unused-vars': ['error', {
      vars: 'all', // 检测所有变量，包括全局环境中的变量。这是默认值。
      args: 'after-used', // 最后一个参数必须使用。如：一个函数有两个参数，你只使用了第二个参数，ESLint 不会报警告。
      ignoreRestSiblings: true // 忽略 rest属性的兄弟。 比如：var { type, ...coords } = data; type没有使用，这时不会警告
    }],

    // 规则：禁止在变量定义之前使用它们
    // https://eslint.org/docs/rules/no-use-before-define
    'no-use-before-define': ['error', { functions: true, classes: true, variables: true }],
  }
};
