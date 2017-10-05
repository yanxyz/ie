# select

## .value

如果 `<option>` 没有 value attribute，

IE 9-10 select.value 末尾有一个空格，需要 trim

IE < 9, select.value 为 "", 获取：`select.options[select.selectedIndex].value`

### .options

IE < 9, `.options[-1]` 抛出错误。

## .namedItem()

IE, Edge, select.namedItem()，只考虑 id 不考虑 name

- https://connect.microsoft.com/IE/feedbackdetail/view/2414092/

## innerHTML

IE < 10, select 不能用 innerHTML 插入 options

- https://support.microsoft.com/en-us/kb/276228
