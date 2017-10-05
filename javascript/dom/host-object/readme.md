# host object

IE < 9 DOM objects 是 host objects, 而不是 JavaScript objects。

DOM objects 没有继承 Object.prototype:

``` js
Object.getPrototypeOf(document.body) // null
Object.getPrototypeOf(document) // null
Object.getPrototypeOf(alert) // null
alert instanceof Object // false
alert.toString // undefined
alert + ''
// "
// function alert() {
//     [native code]
// }
// "
```

DOM 方法没有继承 Function.prototype：

``` js
alert instanceof Function // false
alert.call // undefined
typeof alert // "object"
document.createElement instanceof Function // false
```

DOM 方法不能枚举：

``` js


```

DOM 方法静态绑定 this:

``` js
// IE9 抛出错误
var cachedGetElementById = document.getElementById
cachedGetElementById('test')
```

IE9 的做法：

``` js
// IE9 抛出错误
var cachedGetElementById = document.getElementById.bind(document)
cachedGetElementById('test')
```

HTML attribute 和 DOM property 没有分开：

``` js


```


window 是 host 对象：

``` js
window === window.window // false
```

id 不能重新赋值：

``` js


```

## 参考

- [JScript and DOM changes in IE9 preview 3](http://perfectionkills.com/jscript-and-dom-changes-in-ie9-preview-3/)
- [Exploring IE9’s Enhanced DOM Capabilities](https://blogs.msdn.microsoft.com/ie/2010/09/02/exploring-ie9s-enhanced-dom-capabilities/)
