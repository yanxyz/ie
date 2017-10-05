# window.postMessage()

- [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage)
- [Can I Use](http://caniuse.com/#feat=x-doc-messaging)
- [HTML5 Implementation Issues in IE8 (and later)](http://blogs.msdn.com/b/ieinternals/archive/2009/09/16/bugs-in-ie8-support-for-html5-postmessage-sessionstorage-and-localstorage.aspx)

## 问题

IE8-9 只能发送字符串

```js
// send an object
{ text: 'hello'}

// received
"[object Object]"
```

IE8-10 只能在 frames/iframes 之间，不能在 tabs/windows 之间通信。
IE11 可以在 tabs/windows 之间通信，但是只限于同域。

IE8 同步触发事件，可能会有问题。
