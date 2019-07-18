module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [ "plugin:vue/strongly-recommended", "eslint:recommended" ],
  rules: {

    // Possible error
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "for-direction": "error",
    "no-await-in-loop": "error",
    "no-extra-parens": "error",
    "no-template-curly-in-string": "error",
    complexity: [ "error", 4 ],
    eqeqeq: "error",
    "guard-for-in": "error",
    "max-classes-per-file": [ "error", 1 ],
    "no-alert": "error",
    "no-floating-decimal": "error",
    "no-lone-blocks": "error",
    "no-loop-func": "error",
    "no-multi-spaces": "error",
    "no-octal": "error",
    "no-param-reassign": "error",
    "no-return-assign": "error",
    "no-return-await": "error",
    yoda: "error",
    "no-unmodified-loop-condition": "error",
    radix: "error",
    "vars-on-top": "error",

    // Stylistic Issues
    camelcase: "error",
    "brace-style": "error",
    "block-spacing": "error",
    "array-element-newline": [
      "error",
      {
        minItems: 3,
        multiline: true,
      },
    ],
    "array-bracket-spacing": [
      "error",
      "always",
      {
        objectsInArrays: false,
        arraysInArrays: false,
      },
    ],
    "array-bracket-newline": [
      "error",
      {
        minItems: 3,
        multiline: true,
      },
    ],
    "comma-dangle": [ "error", "always-multiline" ],
    "comma-spacing": [
      "error",
      {
        before: false,
        after: true,
      },
    ],
    "comma-style": [ "error", "last" ],
    "jsx-quotes": [ "error", "prefer-double" ],
    indent: [
      "error",
      2,
      {
        VariableDeclarator: "first",
        MemberExpression: 1,
        ArrayExpression: 1,
        ObjectExpression: 1,
        ignoreComments: true,
      },
    ],
    "implicit-arrow-linebreak": [ "error", "beside" ],
    "function-paren-newline": [ "error", "never" ],
    "func-call-spacing": [ "error", "never" ],
    "eol-last": [ "error", "always" ],
    "computed-property-spacing": [ "error", "never" ],
    "newline-per-chained-call": [
      "error",
      {
        ignoreChainWithDepth: 4,
      },
    ],
    "new-parens": "error",
    "max-statements-per-line": [
      "error",
      {
        max: 2,
      },
    ],
    "max-nested-callbacks": [ "error", 4 ],
    "max-lines-per-function": [ "error", 40 ],
    "max-lines": [ "error", 500 ],
    "max-depth": [ "error", 4 ],
    "lines-between-class-members": [ "error", "always" ],
    "key-spacing": [
      "error",
      {
        beforeColon: false,
      },
    ],
    "no-bitwise": "error",
    "no-new-object": "error",
    "no-nested-ternary": "error",
    "no-multiple-empty-lines": [
      "error",
      {
        max: 2,
        maxEOF: 1,
      },
    ],
    "no-multi-assign": "error",
    "no-lonely-if": "error",
    "operator-linebreak": [ "error", "after" ],
    "operator-assignment": [ "error", "always" ],
    "one-var-declaration-per-line": [ "error", "always" ],
    "one-var": [
      "error",
      {
        let: "consecutive",
        const: "never",
        separateRequires: true,
      },
    ],
    "object-property-newline": "error",
    "object-curly-spacing": [ "error", "always" ],
    "object-curly-newline": [
      "error",
      {
        ObjectExpression: "always",
        ObjectPattern: "never",
        ImportDeclaration: "never",
        ExportDeclaration: "never",
      },
    ],
    "no-whitespace-before-property": "error",
    "no-unneeded-ternary": "error",
    "no-trailing-spaces": "error",
    "switch-colon-spacing": "error",
    "space-unary-ops": "error",
    "space-infix-ops": "error",
    "space-in-parens": [
      "error",
      "never",
      {
        exceptions: [ "()", "[]" ],
      },
    ],
    "space-before-function-paren": [ "error", "never" ],
    "space-before-blocks": [ "error", "always" ],
    "semi-style": [ "error", "last" ],
    semi: [ "error", "never" ],
    quotes: [
      "error",
      "double",
      {
        allowTemplateLiterals: true,
      },
    ],
    "quote-props": [ "error", "as-needed" ],

    // ECMAScript 6
    "arrow-body-style": [ "error", "as-needed" ],
    "arrow-parens": [ "error", "as-needed" ],
    "arrow-spacing": "error",
    "no-const-assign": "error",
    "no-duplicate-imports": [
      "error",
      {
        includeExports: true,
      },
    ],
    "no-restricted-imports": [ "error", "jquery" ],
    "no-useless-computed-key": "error",
    "no-useless-rename": "error",
    "no-var": "error",
    "prefer-const": "error",
    "prefer-destructuring": "error",
    "prefer-rest-params": "error",
    "prefer-template": "error",
    "rest-spread-spacing": [ "error", "never" ],
    "template-curly-spacing": [ "error", "always" ],

    // VUEjs
    "vue/max-attributes-per-line": [
      "error",
      {
        singleline: 3,
        multiline: {
          max: 1,
          allowFirstLine: false,
        },
      },
    ],
    "vue/script-indent": [
      "error",
      2,
      {
        baseIndent: 0,
        switchCase: 0,
        ignores: [],
      },
    ],
    "vue/this-in-template": "error",
    "vue/require-prop-type-constructor": "off",
    "vue/no-use-v-if-with-v-for": "off",
    "vue/attributes-order": "error",
    "vue/order-in-components": "error",
    "vue/no-v-html": "error",
    "vue/eqeqeq": "error",
    "vue/require-direct-export": "error",
    "vue/v-on-function-call": [ "error", "always" ],
    "vue/array-bracket-spacing": [
      "error",
      "always",
      {
        objectsInArrays: false,
        arraysInArrays: false,
      },
    ],
    "vue/component-name-in-template-casing": [ "error", "kebab-case" ],
  },
  parserOptions: {
    parser: "babel-eslint",
  },
}
