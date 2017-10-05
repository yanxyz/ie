# Attributes

- [Attributes and custom properties](http://javascript.info/tutorial/attributes-and-custom-properties)
- [getAttribute method](https://msdn.microsoft.com/en-us/library/ms536429.aspx)
- [Attribute Differences in Windows Internet Explorer 8](https://msdn.microsoft.com/en-us/library/dd347148.aspx)

## property

IE < 9 会同步 custom attribute 给 property, 并且值的类型也一样，而不是字符串。

IE < 8 不区分 attribute 和 property。`.attributes` 返回 property 列表。

`.getAttribute()` 和 property 的结果一样。例如：

- [readonly](readonly.html)
- [href](href.html)，`.getAttribute()` 结果同 `.href`，`.setAttribute("href", value)` 改成相对路径后，`.href` 返回相对路径而不是全路径。
- [src](src.html)，始终是全路径。

## API

IE < 8 不支持 `.hasAttribute()`, `.setAttribute()`。


`getAttribute()`, `.setAttribute()` 使用 property name。例如：
[class](class.html), 应使用 className 而不是 class。

`.setAttribute()` 设置多个 attribute, 名字相同只是大小写不同。相应的 property 或者 `getAttribute()` 返回第一个 attribute。
[abc](abc.html)

`.setAttribute()` 不能添加事件处理器。

