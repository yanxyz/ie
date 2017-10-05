# ES5

ES5 增加的内容比较少，IE9 除了 Strict Mode 外几乎都实现了。

- http://kangax.github.io/compat-table/es6/#ie9
- https://github.com/es-shims/es5-shim

## String

### IE < 8 不支持字符串索引

```js
var str = 'abc'
str[2] // "c"
str.charAt(2) // "c"
```

### IE < 9 string.substr(start, length), 如果 start < 0 则按 0 处理

```js
'abc'.substr(-1) // "abc"，应该是 "c"
```

## Object

### IE < 8 对象字面量有多余的逗号将抛出 SyntaxError

``` js
var person = {
  name: 'Ivan Yan',
} // 抛出错误，退出执行
alert('Hi!')
```

### IE < 9，对象键名不能使用关键字



## Array

### IE < 9 不会忽略数组字面量多余的逗号

``` js
[1,].length   // 2，应该是 1
[1,,].length  // 3，应该是 2
```

IE < 9 Array 最大索引是 2E31-1, 标准是 2E32-1。
[Array index handling](https://msdn.microsoft.com/en-us/library/gg622936.aspx)

## Global

### IE < 9 parseInt() 支持旧八进制：

```js
parseInt('010') // 10, IE > 8
parseInt('010') // 8, IE < 9
```

## eval

IE < 9 通过别名间接调用 eval，eval 的代码运行在本地作用域中，而不是全局作用域中。
[Indirect eval function called are now globally scoped](https://msdn.microsoft.com/en-us/library/gg622934.aspx)
