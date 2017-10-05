window.onload = function () {
  var select = document.getElementById('s')
  log(select)
  select.onchange = function () {
    log(this)
  }
}

function log (select) {
  var selected = select.options[select.selectedIndex]
  var arr = [
    'select.value: "' + select.value + '"',
    'select.selectedIndex: ' + select.selectedIndex,
    'select.options[select.selectedIndex].value: "' + selected.value + '"',
    'select.options[select.selectedIndex].text: "' + selected.text + '"',
    'select.options[select.selectedIndex].textContent: "' + selected.textContent + '"'
  ]
  document.getElementById('log').value = arr.join('\n')
}
