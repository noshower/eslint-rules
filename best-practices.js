module.exports = {
  rules: {
    // 规则：	强制 getter 和 setter 在对象中成对出现
    // 配置含义： 关闭规则，因为airbnb不推荐使用getters/setters
    'accessor-pairs': 'off',

    // 规则：强制数组方法的回调函数中有 return 语句
    // https://eslint.org/docs/rules/array-callback-return
    // 配置含义：开启规则，但是允许隐式使用 return 不包含任何表达式地返回 undefined
    'array-callback-return': ['error', { allowImplicit: true }],

    // 规则：强制把变量的使用限制在其定义的作用域范围内
    // 个人看法：这个规则可以关闭，因为我们会强制使用let, const定义变量，这些是具有块级作用域的
    'block-scoped-var': 'error',

    // 规则：允许设置圈复杂度阈值。  比如 限制if{}else if{} else if{}的层数
    complexity: ['off', 11],

    // 规则：强制类的方法使用this
    // 理由：如果一个类方法不使用 this，可以安全的做为静态函数出现
    // https://eslint.org/docs/rules/class-methods-use-this
    'class-methods-use-this': ['error', {
      exceptMethods: [],
    }],

    // 规则：要求一个函数里的return语句是一致的，要么都指定返回值，要么都不指定
    // https://eslint.org/docs/rules/consistent-return
    'consistent-return': 'error',

    // 规则：要求遵循大括号约定
    // 配置含义： 允许在单行中省略大括号，而if、else if、else、for、while 和 do，在其他使用中会强制使用大括号
    curly: ['error', 'multi-line'],

    // 规则：要求 switch 语句中有 default 语句
    // 配置含义: { commentPattern: '^no default$' }的意思是当确实没有默认分支时，可以在最后一个case语句后，加个注释 // No Default，这样就可以允许省略default语句
    // https://eslint.org/docs/rules/default-case
    'default-case': ['error', { commentPattern: '^no default$' }],

    // 规则：如果能使用.访问对象属性，就使用.符号
    // 理由：在 JavaScript 中，你可以使用点号 (foo.bar) 或者方括号 (foo["bar"])来访问属性。然而，点号通常是首选，因为它更加易读，简洁，也更适于 JavaScript 压缩。
    // 配置含义： { allowKeywords: true } 允许保留字也可以使用.符号访问。
    // 个人看法： 我们的代码都运行在es5及以上的环境，可以使用.访问保留字属性的值。
    'dot-notation': ['error', { allowKeywords: true }],

    // 规则：	强制在点号之前和之后一致的换行
    // 理由： 在点之前或之后放置换行符可以大大提高可读性
    // 配置含义： 'property' 表示 表达式中的点号操作符应该和属性在同一行。
    // https://eslint.org/docs/rules/dot-location
    'dot-location': ['error', 'property'],

    // 规则：要求使用 === 和 !==
    // 理由：这样做的原因是，== 和 != 遵循 Abstract Equality Comparison Algorithm 作强制转型
    // https://eslint.org/docs/rules/eqeqeq
    eqeqeq: ['error', 'always', { null: 'ignore' }],

    // 规则： 要求for-in循环中有一个if语句
    // 理由： 在使用 for in 遍历对象时，会把从原型链继承来的属性也包括进来。这样会导致意想不到的项出现。
    'guard-for-in': 'error',

    // 规则：限制每个文件的class数量
    // 配置含义：1 表示每个文件最多一个class（这也是esLint认为的最佳实践）
    // https://eslint.org/docs/rules/max-classes-per-file
    'max-classes-per-file': ['error', 1],

    // 规则：	禁用 alert、confirm 和 prompt
    'no-alert': 'warn',

    // 规则：禁用 caller 或 callee
    // 理由： arguments.caller 和 arguments.callee 的使用使一些代码优化变得不可能。在 JavaScript 的新版本中它们已被弃用，同时在 ECMAScript 5 的严格模式下，它们也是被禁用的。
    'no-caller': 'error',

    // 规则：禁止在 case 或 default 子句中出现词法声明
    // 理由：该规则禁止词法声明 (let、const、function 和 class) 出现在 case或default 子句中。原因是，词法声明在整个 switch 语句块中是可见的，但是它只有在运行到它定义的 case 语句时，才会进行初始化操作。
    // 为了保证词法声明语句只在当前 case 语句中有效，将你子句包裹在块中。
    // https://eslint.org/docs/rules/no-case-declarations.html
    'no-case-declarations': 'error',

    // 规则：禁止使用看起来像除法的正则表达式
    // https://eslint.org/docs/rules/no-div-regex
    'no-div-regex': 'off',

    // 禁止else前面有return
    // 理由：如果 if 块中包含了一个 return 语句，else 块就成了多余的了。可以将其内容移至块外。
    // 配置含义： { allowElseIf: false } 禁止在 return 之后有 else if 块
    // https://eslint.org/docs/rules/no-else-return
    'no-else-return': ['error', { allowElseIf: false }],

    // 规则：禁止出现空函数
    // 理由：空函数能降低代码的可读性，因为读者需要猜测它是否是有意为之。所以，为空函数写一个清晰的注释是个很好的实践。
    // 配置含义：允许'arrowFunctions','functions', 'methods'这三类函数可以为空。
    // https://eslint.org/docs/rules/no-empty-function
    'no-empty-function': ['error', {
      allow: [
        'arrowFunctions',
        'functions',
        'methods',
      ]
    }],

    // 规则：禁止使用空解构模式
    // 理由：空的解构常常会被认为错误使用默认值，给读者带来疑惑。
    // https://eslint.org/docs/rules/no-empty-pattern
    'no-empty-pattern': 'error',

    // 规则：禁止null ‘===’比较
    // 这里关闭了此规则，因为我们配置了必须使用===来比较
    'no-eq-null': 'off',

    // 规则：禁止使用eval
    'no-eval': 'error',

    // 规则：禁止扩展原生类型
    'no-extend-native': 'error',

    // 规则：禁止不必要的 .bind() 调用
    // 理由：如果去掉bind，不影响函数的调用结果，就请去掉bind调用。这样可以减少不必要的开销（和性能损耗）
    'no-extra-bind': 'error',

    // 规则：禁用不必要的标签
    // 理由： 如果一个循环中不包含嵌套循环或 switch 语句，对这样的循环使用标签是不必要的。
    // https://eslint.org/docs/rules/no-extra-label
    'no-extra-label': 'error',

    // 规则: 要求case语句，加上brewk
    'no-fallthrough': 'error',

    // 规则：	禁止数字字面量中使用前导和末尾小数点
    // https://eslint.org/docs/rules/no-floating-decimal
    'no-floating-decimal': 'error',

    // 规则：	禁止对原生对象或只读的全局对象进行赋值
    // https://eslint.org/docs/rules/no-global-assign
    'no-global-assign': ['error', { exceptions: [] }],

    // 已过时，使用'no-global-assign'代替
    'no-native-reassign': 'off',

    // 规则：禁止隐式的类型转换
    // https://eslint.org/docs/rules/no-implicit-coercion
    'no-implicit-coercion': ['off', {
      boolean: false,
      number: true,
      string: true,
      allow: [],
    }],

    // 	规则：禁止在全局范围内使用变量声明和 function 声明
    // https://eslint.org/docs/rules/no-implicit-globals
    'no-implicit-globals': 'off',

    // 规则：禁用隐式的eval()
    // 理由：消除使用 setTimeout()、setInterval() 或 execScript() 时隐式的 eval()，当它们中的任何一个使用字符串作为第一个参数时，该规则将发出警告。
    // https://eslint.org/docs/rules/no-implied-eval/
    'no-implied-eval': 'error',

    // 规则：	禁止 this 关键字出现在类和类对象之外
    // https://eslint.org/docs/rules/no-invalid-this
    'no-invalid-this': 'off',

    // 规则：禁用 __iterator__ 属性
    // 理由：__iterator__ 属性曾是 SpiderMonkey 对 JavaScript 的扩展，被用来创建自定义迭代器，兼容JavaScript的 for in 和 for each。然而，这个属性现在废弃了，所以不应再使用它
    // https://eslint.org/docs/rules/no-iterator
    'no-iterator': 'error',

    // 规则：禁止使用label标签
    'no-labels': ['error', { allowLoop: false, allowSwitch: false }],

    // 规则：禁用不必要的嵌套块
    // https://eslint.org/docs/rules/no-lone-blocks
    'no-lone-blocks': 'error',

    // 规则：禁止在循环语句中包含不安全引用的函数声明
    // https://eslint.org/docs/rules/no-loop-func
    'no-loop-func': 'error',

    // 规则：禁用魔术数字（魔术数字是在代码中多次出现的没有明确含义的数字。它最好由命名常量取代。）
    // https://eslint.org/docs/rules/no-magic-numbers
    'no-magic-numbers': ['off', {
      ignore: [],  // 一个数字数组，指定检测中可以忽略的数字
      ignoreArrayIndexes: true,  // 一个布尔值，指定数字用作数组的索引是否是可以的
      enforceConst: true,  // 一个布尔值，指定是否应该在数字变量的声明中检测 const 关键字
      detectObjects: false,  // 一个布尔值，指定是否应该在设置对象属性时检测数字
    }],

    // 规则：	禁止使用多个空格
    // https://eslint.org/docs/rules/no-multi-spaces
    'no-multi-spaces': ['error', {
      ignoreEOLComments: false,  // 是否忽略行尾注释前的多个空格
    }],

    // 规则：禁止使用多行字符串
    // 理由： 在 JavaScript 中，可以在新行之前使用斜线创建多行字符串，这种用斜线创建多行字符串的方式不被推荐。
    // https://eslint.org/docs/rules/no-multi-str
    'no-multi-str': 'error',

    // 规则：禁止在assignment或comparison之外使用“new”运算符
    // 理由：new Person();在这个例子中，创建的对象被销毁因为它的引用没有被存储在任何地方。
    // https://eslint.org/docs/rules/no-new
    'no-new': 'error',

    // 规则：禁止对 Function 对象使用 new 操作符
    // 理由：new Function创建一个对象，跟eval类似，存在安全隐患
    // https://eslint.org/docs/rules/no-new-func
    'no-new-func': 'error',

    // 规则：	禁止对 String，Number 和 Boolean 使用 new 操作符
    // 理由：1.原始包装对象实际上是对象。这意味着 typeod 将返回 "object" 而不是 "string"、"number" 或者 "boolean"。
    // 2.每个对象都是真，这意味着每个 Boolean 的实例都会返回 true，即使它们实际的值是 false。
    // https://eslint.org/docs/rules/no-new-wrappers
    'no-new-wrappers': 'error',

    // 规则：禁止使用八进制字面量
    // 理由：在 JavaScript 代码中，八进制的前导数字零作为其标示一致是导致混淆和错误的来源，ECMAScript 5 已经弃用了八进制字面量。
     // https://eslint.org/docs/rules/no-octal
    'no-octal': 'error',

    // 规则：	禁止在字符串字面量中使用八进制转义序列
    // 理由：自 ECMAScript 规范第5版起，字符串字面量中的八进制转义序列已经被弃用，不应该被使用。应该使用 Unicode 转义序列。
    // 比如：var foo = 'Copyright \251';应该改为 var foo = "Copyright \u00A9";
    'no-octal-escape': 'error',

    // 规则：禁止对函数参数的再赋值，禁止参数对象操作（特定排除除外）
    // 理由：操作参数对象，可能会在原始调用方引起不必要的副作用。这类副作用还比较隐蔽。
    // rule: https://eslint.org/docs/rules/no-param-reassign.html
    'no-param-reassign': ['error', {
      props: true, // "props" 默认为 false。如果 "props" 设置为true，对参数的任何属性的修改，该规则都将发出警告， 
                  // 除非在 "ignorePropertyModificationsFor"（默认为空数组） 有该参数。
      ignorePropertyModificationsFor: [ 
        'acc', // for reduce accumulators
        'accumulator', // for reduce accumulators
        'e', // for e.returnvalue
        'ctx', // for Koa routing
        'req', // for Express requests
        'request', // for Express requests
        'res', // for Express responses
        'response', // for Express responses
        '$scope', // for Angular 1 scopes
        'staticContext', // for ReactRouter context
      ]
    }],

    // 规则：禁用 __proto__ 属性
    // 理由：__proto__ 属性在 ECMAScript 3.1 中已经被弃用，并且不应该在代码中使用。使用 getPrototypeOf 方法替代 __proto__。
    // https://eslint.org/docs/rules/no-proto
    'no-proto': 'error',

    // 规则：禁止多次声明同一变量
    // https://eslint.org/docs/rules/no-redeclare
    'no-redeclare': 'error',

    // 规则：禁止使用对象的某些属性
    // https://eslint.org/docs/rules/no-restricted-properties
    'no-restricted-properties': ['error', {
      object: 'arguments',
      property: 'callee',
      message: 'arguments.callee is deprecated',
    }, {
      object: 'global',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead',
    }, {
      object: 'self',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead',
    }, {
      object: 'window',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead',
    }, {
      object: 'global',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead',
    }, {
      object: 'self',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead',
    }, {
      object: 'window',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead',
    }, {
      property: '__defineGetter__',
      message: 'Please use Object.defineProperty instead.',
    }, {
      property: '__defineSetter__',
      message: 'Please use Object.defineProperty instead.',
    }, {
      object: 'Math',
      property: 'pow',
      message: 'Use the exponentiation operator (**) instead.',
    }],

    // 规则：	禁止在 return 语句中使用赋值语句
    // 理由：在 JavaScript 中一个有趣有时有令人感到困惑的是几乎可以在任何位置进行赋值操作。正因为如此，本想进行比较操作，结果由于手误，变成了赋值操作。这种情况常见于 return 语句
    // function doSomething() {return foo = bar + 2;} 比如这个return语句令人很困惑
    // 很有可能这个函数是为了返回 bar + 2，但是如果是这样的话，为什么赋值给 foo 呢？也很有可能使用比较运算符比如 ==，如果是这样的话代码是错误的
    // https://eslint.org/docs/rules/no-return-assign
    'no-return-assign': ['error', 'always'], // always 表示禁止所有赋值

    // 规则：禁用不必要的 return await
    // 理由：在 async function， return await 是没有用的 。因为 async function 的返回值总是包裹在 Promise.resolve，
    // 在 Promise resolve 或 reject 之前，return await 实际上不会做任何事情。这种模式几乎可以肯定是由于程序员不知道 async function 语法的返回值造成的。
    // https://eslint.org/docs/rules/no-return-await
    'no-return-await': 'error',

    // 禁用 Script URL
    // 理由：在 javascript: 链接中的代码必须由浏览器解析和赋值，其处理方式与 eval 一样
    // https://eslint.org/docs/rules/no-script-url
    'no-script-url': 'error',

    // 禁止自我赋值
    // 理由： 自身赋值不起任何作用，可能是由于不完整的重构造成的错误。也表明你的工作还没做完。
    // https://eslint.org/docs/rules/no-self-assign
    'no-self-assign': ['error', {
      props: true, // props - 如果为 true，no-self-assign 规则将对属性的自我赋值发出警告
    }],

    // 规则：禁止自身比较
    // 理由：唯一肯能会对变量自身做比较时候是当你在测试变量是否是 NaN。然而，在这种情况下，更适合使用 typeof x === 'number' && isNaN(x) 或者 Number.isNaN ES2015 函数 而不是变量自身比较。
    // https://eslint.org/docs/rules/no-self-assign
    'no-self-compare': 'error',

    // 规则：不允许使用逗号操作符
    // 理由：逗号操作符包含多个表达式，其中只有一个是可使用的。它从左到右计算每一个操作数并且返回最后一个操作数的值
    // 此规则禁止逗号操作符的使用，以下情况除外：1.在初始化或者更新部分 for 语句时。2.如果表达式序列被明确包裹在括号中。
    // https://eslint.org/docs/rules/no-sequences
    'no-sequences': 'error',

    // 规则：限制可以被抛出的异常
    // 理由：仅仅 抛出(throw) Error 对象本身或者用户自定义的以 Error 对象为基础的异常，被认为是一个很好的实践。
    // 使用 Error 对象最基本的好处是它们能自动地追踪到异常产生和起源的地方。
    // throw "error" 这种形式的抛出异常是不被允许的
    // https://eslint.org/docs/rules/no-throw-literal
    'no-throw-literal': 'error',

    // 规则：禁用一成不变的循环条件
    // https://eslint.org/docs/rules/no-unmodified-loop-condition
    'no-unmodified-loop-condition': 'off',

    // 规则：	禁止出现未使用过的表达式
    // 理由: 未使用过的表达式在程序中不起任何作用，通常是个逻辑错误。
    // 例如，n + 1; 不是语法错误，但它可能是程序员的书写错误，原本是想写赋值语句 n += 1;。
    // https://eslint.org/docs/rules/no-unused-expressions
    'no-unused-expressions': ['error', {
      allowShortCircuit: false,  // 设置为 true 将允许你在表达式中使用逻辑短路求值
      allowTernary: false,  // 设置为 true 将允许你在表达式中使用类似逻辑短路求值的三元运算符
      allowTaggedTemplates: false,  // 设置为 true 将允许你在表达式中使用带标签的模板字面量
    }],

    // 规则：禁用未使用过的label
    // 理由：只声明却没有使用的标签可能是由于不完全的重构造成的错误。
    // https://eslint.org/docs/rules/no-unused-labels
    'no-unused-labels': 'error',

    // 规则：禁止不必要的 .call() 和 .apply()
    // https://eslint.org/docs/rules/no-unused-call
    'no-useless-call': 'off',

    // 规则：禁止不必要的catch子句
    // https://eslint.org/docs/rules/no-useless-catch
    'no-useless-catch': 'error',

    // 规则：禁止不必要的字符串字面量或模板字面量的连接
    // 理由：var foo = "a" + "b"; 这样的代码确实不必要存在。直接var foo ='ab'就好了
    // https://eslint.org/docs/rules/no-useless-concat
    'no-useless-concat': 'error',

    // 规则：禁用不必要的转义 
    // 理由：let foo = "hol\a" 这里对a进行转义毫无意义
    // https://eslint.org/docs/rules/no-useless-escape
    'no-useless-escape': 'error',

    // 规则：禁止多余的 return 语句
    // https://eslint.org/docs/rules/no-useless-return
    'no-useless-return': 'error',

    // 规则：禁止使用void操作符
    // https://eslint.org/docs/rules/no-void
    'no-void': 'error',

    // 规则：	禁止在注释中使用特定的警告术语
    // https://eslint.org/docs/rules/no-warning-comments
    'no-warning-comments': [
      'off', { 
      terms:  ['todo', 'fixme', 'xxx'], // 可选的术语数组。默认为["todo", "fixme", "xxx"]。术语匹配不区分大小写，并且作为整个词：fix匹配FIX但不匹配fixing。术语可以由多个词组成：really bad idea。
      location: 'start'  // 可选字符串，用于配置注释中检查匹配的位置。默认为"start"。其他值在评论中匹配anywhere。
    }],

    // 规则：禁用with语句
    // 理由：with 是潜在的问题，因为它会在当前的域中增加对象成员，使得区分实际块中的变量指的是什么变的不可能。
    // https://eslint.org/docs/rules/no-with
    'no-with': 'error',

    // 规则：要求使用 Error 对象作为 Promise reject的原因
    // 理由：在 Promise 中只传递内置的 Error 对象实例给 reject() 函数作为自定义错误，被认为是个很好的实践。Error 对象会自动存储堆栈跟踪，在调试时，通过它可以用来确定错误是从哪里来的。
    // 如果 Promise 使用了非 Error 的值作为拒绝原因，那么就很难确定 reject 在哪里产生。
    // https://eslint.org/docs/rules/prefer-promise-reject-errors
    'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],

    // 规则：建议在正则表达式中使用命名的捕获
    // https://eslint.org/docs/rules/prefer-named-capture-group
    'prefer-named-capture-group': 'off',

    // 规则：强制在parseInt()使用基数参数
    // 个人看法：该规则可以禁用，因为在ES5 环境，parseInt()不会自动检测八进制字面量。因此，parseInt('071')依旧被当做10进制，结果为71；
    radix: 'error',

    // 规则：禁止使用不带 await 表达式的 async 函数
    // https://eslint.org/docs/rules/require-await
    'require-await': 'off',

    // 规则：在RegExp上强制使用`u`标志
    // 理由： "u" 标志开启了多种 Unicode 相关的特性。使用 "u" 标志，任何 Unicode 代码点的转义都会被解释。
    // https://eslint.org/docs/rules/require-unicode-regexp
    'require-unicode-regexp': 'off',

    // 规则：要求将变量声明放在它们作用域的顶部
    'vars-on-top': 'error',

    // 规则：需要把立即执行的函数包裹起来
    // https://eslint.org/docs/rules/wrap-iife.html
    'wrap-iife': ['error', 
    'outside',  // 表示 强制总是包裹 call 表达式.例如：var x = (function () { return { y: 1 };}());
    { functionPrototypeMethods: false } // 使用 .call 和 .apply 调用时，强制要求包裹函数表达式。默认为 false
  ],

    // 规则：要求或者禁止Yoda条件
    // if ("red" === color) {} 这个属于yoda条件
    // 配置含义：进制使用yoda条件。 因为if(color==='red')读起来更自然。颜色是红色，读起来很流畅
    yoda: 'error' // 比较绝不能是 Yoda 条件
  }
};
