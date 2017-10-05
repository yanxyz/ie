将 NodeList 转为数组：

``` js
var items = document.getElementsByTagName('li')
var arr = Array.prototype.slice.call(items)  // (1)
```

IE<9 (1)操作抛出错误，因为 NodeList 是以 COM 对象实现的，
不是 JavaScript 对象，故不能使用 JavaScript 对象的方法。
