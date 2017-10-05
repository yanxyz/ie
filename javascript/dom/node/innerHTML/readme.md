# innerHTML

innerHTML 可读可写。

### IE < 10 一些元素的 innerHTML 是只读的

- html, head, title, frameset, style
- table, thead, tbody, tfoot, tr, col, colgroup，
    表格元素只有 th, td, caption 的 innnerHTML 可写。

给这些元素的 innnerHTML 赋值会抛错："该操作的目标元件无效。"

- https://msdn.microsoft.com/en-us/library/ms533897(v=vs.85).aspx

### IE < 10, select 不能用 innerHTML 插入 option

一个办法是 `select.add(option)`。

- https://support.microsoft.com/en-us/kb/276228

另一个办法是 `select.parentNode.innerHTML = 'select html...'`

### IE < 9 innerHTML 的值与其它浏览器不同

IE < 9 innerHTML 读写都会忽略标签之间的空白。

读，问题有很多，例如：

- IE8 标签大写。
- IE < 8 list 只有最后一个 `<li>` 是关闭的。

IE < 9 `<pre>` 换行符被忽略。

### IE < 9 innerHTML 赋值时会忽略掉 no-scope element

no-scope element 的概念比较模糊。
google: `"no-scope" element site:msdn.microsoft.com`

常见的 no-scope element:
style, script, link, meta, br, noscript

注释也是 no-scope element。
