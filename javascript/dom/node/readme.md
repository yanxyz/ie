# DOM

兼容性

- http://quirksmode.org/dom/core/

### getElementById()

IE < 8，getElementById()

- 不区分大小写
- 同时支持 id 和 name

参考：

- https://msdn.microsoft.com/en-us/library/ms536437.aspx

### getElementsByTagName()

IE < 9, 参数为 `'*'` 时:

- 包含注释节点
- 不能获取 `<object>` 下的 `<param>` 元素。

### getElementsByName()

IE < 8, getElementsByName() 得到的不是 live Nodelist，当增删元素后得到仍然是旧值。

### getElementsByClassName()

IE < 9 不支持 getElementsByClassName()。

ployfill:

- https://github.com/search?q=getElementsByClassName

### querySelector() querySelectorAll()

IE8 开始支持, 但是只支持简单操作符。

### document.createElement()

IE < 9

- document.createElement('<div id="box">') 参数可以有尖括号，有属性
- 创建的自定义元素，tagName 是小写

### text node

IE < 9 标签之间的空白不会解析为 textNode，导致读写的结果和标准的不一样。

IE < 9, document.createTextNode()

- 创建的 textNode 不能添加到 `<style>`

IE 不支持 Text()

- [Text](https://developer.mozilla.org/en-US/docs/Web/API/Text)

### tagName

IE < 9, 注释节点有 tagName，值为 "!"。

### element tree

IE < 9 只支持一个 element tree 属性：children。
而且 children 包含注释节点。

### cloneNode()

IE < 9 cloneNode()，复制出来的节点包含 event handler。
