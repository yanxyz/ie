var xdr = null // 方便在 console 查看

document.getElementById('btn').onclick = onClick

function onClick () {
  if (!window.XDomainRequest) {
    alert('no XDomainRequest')
    return
  }

  xdr = new XDomainRequest()
  xdr.onload = function () {
    console.log(xdr)
    console.log(xdr.responseText)
  }

  xdr.open('post', 'http://b.com')
  xdr.send('name1=value1&name2=value2')
}
