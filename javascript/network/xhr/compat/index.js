/* global XMLHttpRequest alert */

'use strict'

var props = [
  // state
  {
    name: 'readyState',
    ie: 6
  },
  {
    name: 'UNSENT',
    ie: 9
  },
  {
    name: 'OPENED',
    ie: 9
  },
  {
    name: 'HEADERS_RECEIVED',
    ie: 9
  },
  {
    name: 'LOADING',
    ie: 9
  },
  {
    name: 'DONE',
    ie: 9
  },
  // request
  {
    name: 'open',
    ie: 6
  },
  {
    name: 'abort',
    ie: 6
  },
  {
    name: 'setRequestHeader',
    ie: 6
  },
  {
    name: 'send',
    ie: 6
  },
  {
    name: 'timeout',
    ie: 6
  },
  {
    name: 'withCredentials',
    ie: 10
  },
  // response
  {
    name: 'status',
    ie: 6
  },
  {
    name: 'statusText',
    ie: 6
  },
  {
    name: 'responseURL',
    ie: -1
  },
  {
    name: 'getResponseHeader',
    ie: 6
  },
  {
    name: 'getAllResponseHeaders',
    ie: 6
  },
  {
    name: 'overrideMimeType',
    ie: 11
  },
  {
    name: 'responseType',
    ie: 10
  },
  {
    name: 'response',
    ie: 10
  },
  {
    name: 'responseText',
    ie: 6
  },
  {
    name: 'responseXML',
    ie: 6
  },
  {
    name: 'upload',
    ie: 10
  },
  // event
  {
    name: 'onreadystatechange',
    ie: 6
  },
  {
    name: 'ontimeout',
    ie: 6
  },
  {
    name: 'onload',
    ie: 9
  },
  {
    name: 'onprogress',
    ie: 10
  },
  {
    name: 'onloadstart',
    ie: 10
  },
  { name: 'onloadend',
    ie: 10
  },
  {
    name: 'onabort',
    ie: 10
  },
  {
    name: 'onerror',
    ie: 10
  }
]

output()

function output () {
  if (!window.XMLHttpRequest) {
    alert('your browser dose not support XMLHttpRequest')
    return
  }

  var xhr = new XMLHttpRequest()
  log(xhr)

  var html = [
    '<table>',
    '<caption>XMLHttpRequest</caption>',
    '<tr><th>prop</th><th>IE</th><th>your browser</th></tr>'
  ]

  for (var i = 0, len = props.length; i < len; ++i) {
    var item = props[i]
    var tr = '<tr><td>' + item.name + '</td><td>' + item.ie +
      '</td><td>' + test(item.name) + '</td></tr>'
    html.push(tr)
  }

  html.push('</table>')
  document.getElementById('r').innerHTML = html.join('\n')

  function test (p) {
    // IE < 10 not support '&check;' '&cross;'
    return (p in xhr) ? '✓' : '✗'
  }
}

function log (msg) {
  return window.console ? console.log(msg) : ''
}
