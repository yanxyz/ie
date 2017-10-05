### IE < 9 不支持 window.getComputedStyle()

IE < 9 支持 element.currentStyle 来替代，不过：

- 得到的是内联样式和样式表的级联结果。
- 得到的不是计算样式，相对单位没有转为绝对单位。

### CSSStyleSheet

IE < 9 不支持 cssRules, 用 rules 来替代，

- rules -> cssRules, 不过只包含实际存在的样式。
- addRule -> insertRule()
- removeRule -> deleteRule()

### IE < 9 不能通过 innerHTML 插入 `<style>`

见 innerHTML。

### IE < 9  下 createElement() 不能创建 `<style>`
