module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    parser: '@typescript-eslint/parser',
  },
  rules: {
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['index'], // 需要忽略的组件名
      },
    ],
    'no-unused-vars': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-var': 'error', // 禁止使用var
    'prefer-const': 'error', // 建议使用const
    'consistent-this': ['warn', 'self', 'vm'], // this只能取self为别名
    'no-new-object': 'error', // 禁止Object构造函数，请使用字面值创建对象
    'object-shorthand': ['error', 'always'], // 要求对象字面量简写语法（函数简写）
    'quote-props': ['error', 'as-needed'], // 对象属性名称只有必要的才使用引号
    'no-whitespace-before-property': 'error', // 禁止访问属性前面有空格(obj. key)
    'no-array-constructor': 'error', // 禁止Array构造函数，请使用字面量值创建数组
    'array-callback-return': 'error', // 数组方法都必须return （from、every、filter、find、findIndex、map、reduce、reduceRight、some、sort）
    'prefer-destructuring': 'error', // 数组对象使用解构的方式获取属性值
    'rest-spread-spacing': ['error', 'never'], // 扩展运算符及其表达式之间不允许有空格
    quotes: ['warn', 'single'], // 必须字符串单引号
    'no-eval': 'warn', // 禁用 eval()
    'no-new-func': 'error', // 禁用Function构造函数
    'no-param-reassign': 'error', // 禁止修改函数参数  ["error", { "props": true }] 这个可以禁止修改对象
    'template-curly-spacing': 'error', // 模板字符串`${}`中，{}中不允许空格(${a})
    'arrow-parens': ['error', 'always'], // 必须写箭头函数参数括号
    // 'arrow-body-style': ['error', 'as-needed'], // 箭头函数体大括号{}能省则必须省略
    // 'arrow-body-style': 'off', // 箭头函数体大括号{}能省则必须省略
    'no-duplicate-imports': ['error', { includeExports: true }], // 一个路径只 import 一次
    'dot-notation': 'error', // 访问属性时使用点符号，禁用['key']模式
    'no-multi-assign': 'error', // 禁用连续赋值(a=b=c=3)
    eqeqeq: ['error', 'smart'], //  强制使用===或者!==
    'no-unneeded-ternary': 'error', // 避免没必要的三目运算符
    curly: 'error', // 关键字之后不允许省略大括号  if() {}
    'brace-style': 'error', // 关键字之后大括号换行规则(左大括号在同一行)
    'spaced-comment': ['error', 'always'], // 注释（//或者/** */）文案前后需要添加空格
    // 'multiline-comment-style': ['error', 'starred-block'], // 禁止连续的单行注释（连续单行注释需要改成多行注释）
    // indent: ['error', 2, { SwitchCase: 1 }],  // 统一的缩进为2  个别语法可以通过第三个参数控制  // https://cn.eslint.org/docs/rules/indent
    '@typescript-eslint/indent': ['error', 2, { SwitchCase: 1 }],
    'space-before-blocks': 'error', // 块元素前面需要有空格
    'keyword-spacing': 'error', // 要求在关键字之前至少有一个空格 && 要求在关键字之后至少有一个空格
    'space-infix-ops': 'error', // 运算符两端必须添加空格（a === b）
    'no-multiple-empty-lines': ['error', { max: 2 }], // 不允许多个空行
    'space-in-parens': ['error', 'never'], // 圆括号两端不空格
    'array-bracket-spacing': ['error', 'never'], // 方括号前后禁止空格 ([1, 2, 3])
    'object-curly-spacing': ['error', 'always'], // 花括号前后都需要空格 ({ a:1 })
    'comma-spacing': ['error', { before: false, after: true }], // 禁止在逗号前使用空格 && 要求在逗号后使用一个或多个空格
    'func-call-spacing': ['error', 'never'], // 禁止在函数名和左括号之间有空格(仅函数调用)
    'key-spacing': 'error', // 在对象的字面量属性中， 冒号前禁止空格，冒号必须空格
    'no-trailing-spaces': ['error', { skipBlankLines: true }], // 非空白行行末禁止出现空格符
    'comma-style': ['error', 'last'], // 禁止前置逗号（要求逗号放在数组元素、对象属性或变量声明之后，且在同一行）
    'comma-dangle': ['error', 'always-multiline'], // 当最后一个元素或属性与闭括号 ] 或 } 在 不同的行时，要求使用拖尾逗号；当在 同一行时，禁止使用拖尾逗号。
    semi: ['error', 'never'], // 行后面禁止使用；
    camelcase: 'error', // 变量必须驼峰（通过监测_）
    'new-cap': ['error', { capIsNew: false }], // 要求调用 new 操作符时有首字母大写的函数（构造函数大写）"capIsNew": false 允许调用首字符大写的函数
    'space-before-function-paren': ['error', 'never'], // 禁止函数圆括号之前有一个空格
    'arrow-spacing': 'error', // 箭头函数=>前必须加空格（() => {}）
    'no-async-promise-executor': 'off', // 允许promise函数async

    // ts
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-explicit-any': 'off', // 去除any校验
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // '@typescript-eslint/no-empty-function': ['error', { "allow": ["arrowFunctions"]}],
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
}
