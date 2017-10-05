# XDomainRequest

IE8+ 可以通过 XDomainRequest 进行跨域请求。
IE10+ 可以通过 XMLHttpRequest 进行跨域请求。
IE11 删除了 XDomainRequest。

## API

[XDomainRequest object (Internet Explorer)](https://msdn.microsoft.com/en-us/library/cc288060.aspx)

- request header **origin**
- response header **Access-Control-Allow-Origin**

request

- 不能设置 header
- method 只能是 get 和 post。
- protocol 只能是 http:// 和 https://，而且要一致。

response

- 没有 status
- contentType 获取 response header 'Content-Type'
- responseText 获取 response body，即只能是字符串

不能设置 request header 'Content-Type'，只能发送文本，服务器脚本需要特别处理。

protocol 要一致。解决办法：通过 iframe postMessage 代理。

request 和 response 的 header 都不包含 cookie。
解决办法：token 放在 url 或 body 中。

## 参考

- https://blogs.msdn.microsoft.com/ieinternals/2010/05/13/xdomainrequest-restrictions-limitations-and-workarounds/
- https://github.com/MoonScript/jQuery-ajaxTransport-XDomainRequest
