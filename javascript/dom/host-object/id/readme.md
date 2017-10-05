# id

浏览器为每个 id 创建一个变量。

IE<9 为这个变量重新赋值会导致错误。这是因为 IE 的 window 是特别的对象，
window.window 才接近标准的 window 对象。

IE<9:

``` js
window === window.window  // false, IE11/78 模式下为 true
window.window === window.window.window  // true
```

## 参考

http://javascript.info/tutorial/searching-elements-dom

[IE全局变量的Dissociative Identity Disorder（人格分裂症）](http://hax.iteye.com/blog/349569)
