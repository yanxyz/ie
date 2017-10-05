# XHR

## XHR 对象

IE6 XHR 是一个 ActiveXObject 对象, IE7 支持原生的 XHR 对象：

``` js
function createXHR () {
  if (window.XMLHttpRequest) {
    return new XMLHttpRequest()
  } else {
    // IE6
    return new new ActiveXObject('Microsoft.XMLHTTP')
  }
}
```

status 是 response code,
statusText 是 response code description，不同的浏览器可能不同。

responseText 始终包含 response body,
responseXML, 如果不是 XML 数据则为 null。

readyState 表示请求-响应阶段：

0 -> 1 open() -> 2 send() -> 3 response header -> 4 response body

readyState 变化时触发 readystatechange 事件。

``` js
var xhr = createXHR()
// 在 xhr.open() 之前注册以避免一些浏览器失效
xhr.onreadystatechange = function () {
  // 没有 event 传入
  if (xhr.readyState == 4) {
    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
      alert(xhr.responseText)
    } else {
      alert("Request was unsuccessful: "+xhr.status)
    }
  }
}
xhr.open("get", "example.txt", true)
xhr.setRequestHeader('isXHRrequest', true)
xhr.send(null)
```

XMLHttpRequest.readyState



## 参考

- https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest_in_IE6
