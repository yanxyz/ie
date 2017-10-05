# IE

## DOM

### classList

IE>9 支持，不过有缺陷

- add, remove, toggle 只支持一个参数。
- 不支持 SVGElement。

补丁

- <https://github.com/eligrey/classList.js>

### data-* global attributes

IE11

### hidden global attribute

IE11

### CustomEvent

补丁

- <https://github.com/webmodules/custom-event>


## HTML

### `<select>`

IE<10, select 不能用 innerHTML 插入 options

### 条件注释

IE<10

[About conditional comments (Internet Explorer)](https://msdn.microsoft.com/en-us/library/ms537512.aspx)

```html
<!--[if lt IE 9]>
<meta http-equiv="refresh" content="0;URL=http://google.com">
<![endif]-->
```
