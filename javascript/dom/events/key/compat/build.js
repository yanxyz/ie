#!/usr/bin/env node

'use strict'

const fs = require('fs')
const data = require('./data')

build()

function build () {
  const html = fs.readFileSync('tpl.html', 'utf8')
    .replace('{{tbody}}', data.map(row).join('\n'))
  fs.writeFileSync('index.html', html)
}

function row (data) {
  return `
<tr>
  <td>${data.name}</td>
  <td>${data.description}</td>
  ${get('chrome')}
  ${get('firefox')}
  ${get('safari')}
  ${get('edge')}
  ${get('ie')}
</tr>
`

  function get (vender) {
    const value = data[vender]
    if (value === -1) {
      return '<td class="no">No</td>'
    }

    if (value > 0) {
      return `<td class="yes">${value}</td>`
    }

    return '<td class="yes">Yes</td>'
  }
}
