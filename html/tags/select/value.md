# select.value

如果 `<option>` 没有 value attribute，

- option.text, trim
- option.value 为 option.text
- select.value 为 selectedOption.value

IE 11

- option.text, trim
- option.innerText，trim 但是末尾有一个空格
- option.value 为 option.text
- select.value 为 selectedOption.value

IE 9-10

- option.text trim
- option.innerText，trim 但是末尾有一个空格
- option.value 为 option.innerText
- select.value 为 selectedOption.value

select.value 需要 trim

IE < 9

- option.text, trim
- option.innerText, trim
- option.value 为 option.innerText
- select.value 为 ""

获取 select.value：select.options[select.selectedIndex].value
