# attributes

### IE < 11 不支持 hidden attribute。

```css
/* fix IE7-10 */
[hidden] {
  display: none
}
```

### IE8 开始区分 attribute 和 property

[Attribute Differences in Windows Internet Explorer 8](https://msdn.microsoft.com/en-us/library/dd347148.aspx)

IE8 虽然区分了，不过仍然跟标准有一点区别。

- [input readonly attribute](./readonly.html)

IE < 8 操作 `class` attribute 时名字要为 `className`。

href，src 等 attribute 的值为一个 url, 当值为相对路径时，IE < 8 `getAttribute()` 返回绝对路径（property value）而不是相对路径（attribute value)。IE < 8 `getAttribute()` 可以有第二个参数，`getAttribute('href', 2)` 返回相对路径，不过动态插入的 link / image 仍然返回绝对路径。

- [href](./href.html)
- [MSDN getAttribute](https://msdn.microsoft.com/en-us/library/ms536429.aspx)
