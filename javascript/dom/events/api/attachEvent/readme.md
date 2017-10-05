# IE Event API

IE < 9 为旧 API，IE9 开始支持标准 API，IE11 删除了旧 API：

- attachEvent -> addEventListener
- detachEvent -> removeEventListener

## attachEvent

attachEvent(type, handler)

- 事件名字为 'on' + eventType
- handler 没有参数，使用 window.event 访问 event object
- handler 内 this 指向 window
- 不支持捕获

handler return false, 和 onevent handler 一样阻止默认行为，不阻止冒泡。

同一事件类型重复注册同一 handler

- IE < 9 重复调用
- IE9-10，只调用一次

同一事件类型注册多个不同的 handler

- IE < 9 按注册顺序反序调用
- IE9-10 按注册顺序调用

## 参考

- https://msdn.microsoft.com/en-us/library/ff986080(v=vs.85).aspx
- https://msdn.microsoft.com/en-us/library/jj853341(v=vs.85).aspx
