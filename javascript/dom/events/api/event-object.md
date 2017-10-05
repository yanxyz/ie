# IE Event Object

IE < 9 event handler 没有实参。

IE < 11 window.event 是 MSEventObj 的实例。

IE11 click event 是 PointerEvent 的实例。


IE < 9:

#### srcElement

- srcElement -> target

#### returnValue

可读可写。默认值为 true, 表示此事件的默认动作没有被阻止。

- returnValue -> !defaultPrevented
- returunValue = false -> preventDefault()

on-event handler return false

#### cancelBubble

可读可写。默认值为 true, 表示此事件的默认动作没有被阻止。

- cancelBubble = true -> stopPropagation()
