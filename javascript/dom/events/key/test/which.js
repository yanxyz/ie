'use strict'

'use strict'

var input = document.getElementById('text')
input.onkeydown = handler
input.onkeypress = handler
input.onkeyup = handler

var props = [
  'code',
  'key',
  'keyCode',
  'keyIdentifier',
  'char',
  'charCode',
  'which'
]

var newLoop = true

function handler (event) {
  var e = event || window.event
  var r = document.getElementById('r')
  if (newLoop) {
    r.innerHTML = ''
    newLoop = false
  }
  var div = document.createElement('div')
  div.innerHTML = values(e)
  r.appendChild(div)
  if (e.type === 'keyup') newLoop = true
}

function values (event) {
  var html = '<table><caption>' + event.type + '</caption>'
  for (var i = 0, len = props.length; i < len; ++i) {
    var name = props[i]
    html += '<tr><td>' + name + '</td><td>' + event[name] + '</td></tr>'
  }
  return html + '</table>'
}
