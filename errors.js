module.exports = {
  rules: {
    // 规则：强制 “for” 循环中更新子句的计数器朝着正确的方向移动
    // 理由：如果一个 for 循环的停止条件永远无法到达，比如，计数器在错误的方向上移动，将陷入无限循环。
    // 当存在这样的无限循环时，惯例是改用 while 循环。更典型的是，无限循环是个 bug。
    // https://eslint.org/docs/rules/for-direction
    'for-direction': 'error',

    // 规则：强制在 getter 属性中出现一个 return 语句
    // 理由：每个 getter 都期望有返回值
    // https://eslint.org/docs/rules/getter-return
    'getter-return': ['error', {
      allowImplicit: true // 允许在 return 语句中隐式地返回未定义。
    }],

    // 规则：禁止将async 函数作为Promise构造函数的参数。
    // 理由： 1.如果这个async函数抛出错误，那么错误将会丢失且Promise构造函数也不会reject
    // 2. 如果传给Promise的函数内部使用了await，通常这表明实际上没有必要使用新的Promise构造函数，或者可以减小新Promise构造函数的范围
    // https://eslint.org/docs/rules/no-async-promise-executor
    'no-async-promise-executor': 'error',

    // 规则：禁止在循环中 出现 await
    // 理由：在迭代器的每个元素上执行运算是个常见的任务。然而，每次运算都执行 await，意味着该程序并没有充分利用 async/await 并行的好处。
    // 通常，代码应该重构为立即创建所有 promise，然后通过 Promise.all() 访问结果。否则，每个后续的操作将不会执行，直到前一个操作执行完毕。
    // 注意：在许多情况下，一个循环的迭代实际上并不是相互独立的。例如，一次迭代的输出可能是另一次迭代的输入。或者，循环可以重试不成功的异步操作。
    // 在这种情况下，在循环中使用 await 是有意义的，并建议使用标准的 ESLint 禁用注释禁用规则。
    // https://eslint.org/docs/rules/no-await-in-loop
    // todo 有意义
    'no-await-in-loop': 'error',

    // 规则：不允许与-0进行比较
    // 理由：像 x === -0 的代码对于 +0 和 -0 都有效。 而代码的意图似乎是判断x是否为-0，这时候应该使用Object.is(x,-0);
    // https://eslint.org/docs/rules/no-compare-neg-zero
    'no-compare-neg-zero': 'error',

    // 规则：禁止在条件语句中出现赋值操作符
    // https://eslint.org/docs/rules/no-cond-assign
    'no-cond-assign': ['error', 'always'],

    // 规则：禁止使用console
    // 理由：在条件语句中使用赋值操作符是有效的。然而，很难判断某个特定的赋值是否是有意为之。
    // https://eslint.org/docs/rules/no-console
    'no-console': 'warn',

    // 规则：禁止在条件中使用常量表达式
    // https://eslint.org/docs/rules/no-constant-condition
    'no-constant-condition': 'error',

    // 规则：禁止在正则表达式中使用控制字符
    // 在 ASCII 中，0-31 范围内的控制字符是特殊的、不可见的字符。这些字符很少被用在 JavaScript 字符串中，所以一个正则表达式如果包含这些字符的，很有可能一个错误。
    // https://eslint.org/docs/rules/no-control-regex
    // todo
    'no-control-regex': 'error',

    // 规则：禁用 debugger
    // https://eslint.org/docs/rules/no-debugger
    'no-debugger': 'error',

    // 规则：禁止在`function`定义中重复参数
    // https://eslint.org/docs/rules/no-dupe-args
    'no-dupe-args': 'error',

    // 规则：禁止对象字面量中出现重复的 key
    // https://eslint.org/docs/rules/no-dupe-keys
    'no-dupe-keys': 'error',

    // 规则：禁止在switch中出现重复的 case 标签
    // https://eslint.org/docs/rules/no-duplicate-case
    'no-duplicate-case': 'error',

    // 规则：禁止空的块语句
    // https://eslint.org/docs/rules/no-empty
    'no-empty': 'error',

    // 规则：禁止在正则表达式中出现空字符集
    // 理由：在正则表达式中空字符集不能匹配任何字符，它们可能是打字错误。
    // https://eslint.org/docs/rules/no-empty-character-class
    'no-empty-character-class': 'error',

    // 规则：	禁止对 catch 子句的参数重新赋值
    // 理由：在 try 语句中的 catch 子句中，如果意外地（或故意地）给异常参数赋值，是不可能引用那个位置的错误的。由于没有 arguments 对象提供额外的方式访问这个异常，对它进行赋值绝对是毁灭性的。
    // https://eslint.org/docs/rules/no-ex-assign
    'no-ex-assign': 'error',

    // 规则：禁止不必要的布尔类型转换
    // https://eslint.org/docs/rules/no-extra-boolean-cast
    'no-extra-boolean-cast': 'error',

    // 规则：禁止不必要的括号
    // https://eslint.org/docs/rules/no-extra-parens
    // todo
    'no-extra-parens': ['off',
      'all', // (默认) 禁止在 任何 表达式周围出现不必要的圆括号
      {
        conditionalAssign: true,  // 不允许在条件语句的测试表达式中的赋值语句周围出现额外的圆括号
        nestedBinaryExpressions: false,  //允许在嵌套的二元表达式中出现额外的圆括号
        returnAssign: false, // 允许在 return 语句中的赋值语句周围出现额外的圆括号
        ignoreJSX: 'all', // 允许在 no/所有/多行/单行的JSX 组件周围出现额外的圆括号
        enforceForArrowConditionals: false, // 允许在箭头函数体中的三元表达式周围出现额外的圆括号
      }],

    // 规则：	禁止不必要的分号
    // https://eslint.org/docs/rules/no-extra-semi
    'no-extra-semi': 'error',

    // 规则：禁止对 function 声明重新赋值
    // https://eslint.org/docs/rules/no-func-assign
    'no-func-assign': 'error',

    // 规则：禁止在嵌套的语句块中出现变量或 function 声明
    // 理由：可以在任何地方声明变量，甚至是在深层嵌套的语句块中。由于变量声明提升，把声明放在程序或函数体的顶部会使代码更清晰，在任何地方随意声明变量的做法通常是不可取的。
    // 注意 block bindings 中提到的 let 和 const 不会被提升，因此它们不受此规则影响。
    // https://eslint.org/docs/rules/no-inner-declarations
    'no-inner-declarations': 'error',

    // 规则：禁止在 RegExp 构造函数中出现无效的正则表达式
    // 理由：在正则表达式字面量中无效的模式在代码解析时会引起 SyntaxError，但是 RegExp 的构造函数中无效的字符串只在代码执行时才会抛出 SyntaxError。
    // https://eslint.org/docs/rules/no-invalid-regexp
    'no-invalid-regexp': 'error',

    // 规则：	禁止不规则的空白
    // 理由：无效的或不规则的空白会导致 ECMAScript 5 解析问题，也会使代码难以调试（类似于混合 tab 和空格的情况）
    // 这些空格引起的已知的问题: 1. 零宽空格(不被认为是分隔符，经常被解析为 Unexpected token ILLEGAL,不在现代浏览器中显示，期待使用代码存储软件解决其可视化问题)
    // 2. 行分隔符 (在 JSON 中不是一个有效的字符，会引起解析错误)
    // https://eslint.org/docs/rules/no-irregular-whitespace
    // todo
    'no-irregular-whitespace': 'error',

    // 规则：禁止使用字符类语法中由多个代码点组成的字符
    // todo
    // https://eslint.org/docs/rules/no-misleading-character-class
    'no-misleading-character-class': 'error',

    // 规则：禁止将全局对象当作函数进行调用（Math,JSON）
    // 理由：ECMAScript 提供了几个全局对象，旨在直接调用。这些对象由于是大写的（比如 Math 和 JSON）看起来像是构造函数，但是如果你尝试像函数一样执行它们，将会抛出错误。
    // ECMAScript 5 规范明确表示 Math 和 JSON 是不能被调用的：
    // ECMAScript 2015 specification 明确表明 Reflect 不能被调用：
    // https://eslint.org/docs/rules/no-obj-calls
    'no-obj-calls': 'error',

    // 规则：	禁止直接调用 Object.prototypes 的内置属性
    // 理由：ECMAScript 5.1 新增了 Object.create，可以通过它创建带有指定的 [[Prototype]] 的对象。Object.create(null) 是的一种常见模式，用来创建键值对对象。
    // 当创建的对象有从 Object.prototype 继承来的属性时，可能会导致错误出现。该规则防止在一个对象中直接调用 Object.prototype 的方法。
    // https://eslint.org/docs/rules/no-prototype-builtins
    'no-prototype-builtins': 'error',

    // 规则：禁止正则表达式字面量中出现多个空格
    // 理由：正则表达式可以很复杂和难以理解，这就是为什么要保持它们尽可能的简单，以避免出现错误
    // https://eslint.org/docs/rules/no-regex-spaces
    'no-regex-spaces': 'error',

    // 规则：禁用稀疏数组
    // 理由：var colors = [ "red",, "blue" ];在这个例子中，colors 数值的 length 是 3。但是否是开发者想让数组中间出现一个空元素？或者只是一个书写错误？
    // https://eslint.org/docs/rules/no-sparse-arrays
    'no-sparse-arrays': 'error',

    // 规则：	禁止在常规字符串中出现模板字面量占位符语法
    // 理由：ECMAScript 6 允许程序员使用模板字面量创建包含变量或表达式的字符串，在两个反引号之间书写表达式比如 ${variable}，而不是使用字符串拼接。
    // 在使用模板字面量过程中很容易写错引号，写错成 "${variable}" 而不是在字符串中包含注入的表达式的值。
    // https://eslint.org/docs/rules/no-template-curly-in-string
    'no-template-curly-in-string': 'error',

    // 规则：禁止出现令人困惑的多行表达式
    // https://eslint.org/docs/rules/no-unexpected-multiline
    'no-unexpected-multiline': 'error',

    // 规则：禁止在return、throw、continue 和 break 语句之后出现不可达代码
    // 理由：因为 return、throw、continue 和 break 语句无条件地退出代码块，其之后的任何语句都不会被执行。不可达语句通常是个错误。
    // https://eslint.org/docs/rules/no-unreachable
    'no-unreachable': 'error',

    // 规则：禁止在finally中出现return/throw/break/continue语句；
    // 理由：JavaScript 暂停 try 和 catch 语句块中的控制流语句，直到 finally 语句块执行完毕。
    // 所以，当 return、throw、break 和 continue 出现在 finally 中时， try 和 catch 语句块中的控制流语句将被覆盖，这被认为是意外的行为
    // https://eslint.org/docs/rules/no-unsafe-finally
    'no-unsafe-finally': 'error',

    // 规则：禁止对关系运算符的左操作数使用否定操作符
    // 理由：开发人员可能会把 -(a + b) 写错成 -a + b 来表示一个负数，也可能会把 !(key in object) 错写成 !key in object 来测试一个键是否在对象中。类似的情况也有 !obj instanceof Ctor。
    // https://eslint.org/docs/rules/no-unsafe-negation
    'no-unsafe-negation': 'error',

    // 已过时，使用no-unsafe-negation规则代替
    // https://eslint.org/docs/rules/no-negated-in-lhs
    'no-negated-in-lhs': 'off',

    // 规则：Disallow assignments that can lead to race conditions due to usage of await or yield
    // 这个规则反应的代码有点意思，详情点下方链接
    // https://eslint.org/docs/rules/require-atomic-updates
    // TODO: enable, semver-major
    'require-atomic-updates': 'error',

    // 规则：要求使用 isNaN() 检查 NaN
    // 理由：在 JavaScript 中，NaN 是 Number 类型的一个特殊值。它被用来表示非数值，这里的数值是指在 IEEE 浮点数算术标准中定义的双精度64位格式的值。
    // 因为在 JavaScript 中 NaN 独特之处在于它不等于任何值，包括它本身，与 NaN 进行比较的结果是令人困惑：
    // NaN !== NaN or NaN != NaN evaluate to true
    // 因此，使用 Number.isNaN() 或 全局的 isNaN() 函数来测试一个值是否是 NaN。
    // https://eslint.org/docs/rules/use-isnan
    'use-isnan': 'error',

    // 规则：强制使用有效的 JSDoc 注释
    // https://eslint.org/docs/rules/valid-jsdoc
    'valid-jsdoc': 'off',

    // 规则：强制 typeof 表达式与有效的字符串进行比较
    // 理由：对于绝大多数用例而言，typeof 操作符的结果是以下字符串字面量中的一个："undefined"、"object"、"boolean"、"number"、"string"、"function" 和 "symbol"。把 typeof 操作符的结果与其它字符串进行比较，通常是个书写错误。
    // https://eslint.org/docs/rules/valid-typeof
    'valid-typeof': ['error', {
      requireStringLiterals: true // 要求 typeof 表达式只与字符串字面量或其它 typeof 表达式 进行比较，禁止与其它值进行比较。
    }],
  }
};
