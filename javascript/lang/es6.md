# ES6

IE11 实现了少许 ES6 功能：

- const, let
- typed arrays
- Set
- Map, WeakMap

不过是早期的实现，有兼容性问题。

- http://kangax.github.io/compat-table/es6/#ie11

## Number

IE 不支持 `0b` 二进制数字字面量:

```js
0b10
```

IE 不支持 `0o` 八进制数字字面量:

```js
0o10
```

## String

IE 不支持 template literals:

```js
var str = `Hello
World`
```

## Object

Object.getPrototypeOf()

- ES5 参数必须是 object 否则报错, IE9-11
- ES6 参数转为 object

```js
Object.getPrototypeOf('foo') // ES6 String.prototype
```

## Set

IE11 支持 Set，但是：

- new Set() 不支持 iterable 参数。
- set 对象不支持 iterable 方法，如 values()。

## Map

IE11 支持 Map，但是：

- new Map() 不支持 iterable 参数。
- map 对象不支持 iterable 方法，如 entries()。
