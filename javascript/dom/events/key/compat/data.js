module.exports = [{
  name: 'code',
  description: '按键标识符，唯一且不变，不受键盘布局等影响。',
  edge: -1,
  ie: -1
}, {
  name: 'key',
  description: '按键名字。',
  ie: 9
}, {
  name: 'keyCode',
  description: '与 key 类似，不过值是一个数字。'
}, {
  name: 'keyIdentifier',
  description: '被 key 取代。',
  edge: -1,
  ie: -1,
  firefox: -1
}, {
  name: 'char',
  description: 'keypress 事件输入字符，char 是此字符。',
  ie: 9,
  firefox: -1
}, {
  name: 'charCode',
  description: 'keypress 事件输入字符，charCode 是此字符的 code point。keydown, keyup 值是 0。',
  ie: 9
}, {
  name: 'which',
  description: '多数情况下等于 keyCode。',
  ie: 9
}]
