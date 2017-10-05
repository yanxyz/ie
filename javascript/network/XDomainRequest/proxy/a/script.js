window.onmessage = function (e) {
  e = e || window.event
  console.log('(' + window.location + ') received a response:\n ' +
    e.data + "\n via postMessage from origin '" + e.origin + "'")
}

document.getElementById('btn').onclick = function () {
  window.frames.proxy.postMessage('https://b.com/test.php', 'https://b.com')
}
