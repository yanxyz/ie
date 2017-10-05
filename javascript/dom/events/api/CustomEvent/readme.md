# CustomEvent

IE >= 9

```js
var event = document.createEvent()
event.initCustomEvent(type, canBubble, cancelable, detail);
element.fireEvent()
```


IE >= 9

```js
var event = document.createEvent()
event.initCustomEvent(type, canBubble, cancelable, detail);
element.fireEvent()
```


- createEventObject -> createEvent -> Event
- fireEvent -> dispatchEvent

- http://caniuse.com/#feat=customevent
- https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent
