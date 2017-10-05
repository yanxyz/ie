# CORS

IE8-9 使用 [XDomainRequest](https://msdn.microsoft.com/library/cc288060.aspx)
(下面简称为 XDR) 实现 CORS。与 CORS XHR 的区别：

- request headers 只能设置 Content-Type
- 不能访问 response headers
- 只能异步

```js
var xdr = new XDomainRequest()
xdr.onload = function () {
  console.log(xdr.responseText)
}
xdr.onerror = function () {
  console.log('An error occurred.')
}
xdr.open('POST', 'http://yanxyz.net/xhr')
xdr.contentType = 'application/x-www-form-urlencoded'
xdr.send('firstname=Ivan&lastname=yan')
```

