# console

IE8 引入开发者工具 F12，开始支持 console API。

IE8-9 在没有打开 F12 工具时 console 对象不存在，因此会导致错误。

### console.assert(express, object)

如果 express 为 false, 则 console.error。

IE8-9 非常简陋

### console.clear()

清空控制台。

### console.count(label)

对 label 计数。

### console.debug()

同 console.log()。

### console.dir(object)

输出 object 的成员。

IE9+

### console.dirxml(object)

输出 object 的成员。

IE9+

### console.log()

多个参数用一个空格拼接成一个字符串。

IE11

下面方法类似于 console.log, 使用不同的样式，表达不同的意思：

- console.info
- console.warn
- console.error

### console.group console.groupEnd

IE > 10, Firefox 将 console.group 视为 console.log

### console.profile console.profileEnd
