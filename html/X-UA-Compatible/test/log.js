window.onload = function () {
  log()
}

function log (image) {
  var style = getStyle()
  var arr = [
    'document.compatMode: ' + document.compatMode,
    'document.documentMode: ' + document.documentMode,
    'navigator.userAgent: ' + navigator.userAgent,
    '[1,].length: ' + [1,].length,
    'width: ' + style.width,
    'height: ' + style.height
  ]
  document.getElementById('log').value = arr.join('\n')
}

function getStyle () {
  var box = document.getElementById('box')
  var style
  if (document.documentMode && document.documentMode < 9) {
    style = box.currentStyle
  } else {
    style = window.getComputedStyle(box)
  }
  return style
}
