var outerPagePtr
var outerPageOrigin

document.getElementById('btn').onclick = function () {
  window.parent.postMessage('Message From Inside', '*')
}

window.onmessage = function (e) {
  e = e || window.event
  console.log('The proxy at ' + window.location + '\nreceived a request from ' +
   e.origin + '...\n\nForwarding the request via XDR to: \n' + e.data, 'msgClient')
  outerPagePtr = e.source
  outerPageOrigin = e.origin
  doXDR(e.data)
}

function doXDR (url) {
  if (!window.XDomainRequest) {
    console.error('window.XDomainRequest does not exist')
  }

  var xdr = new XDomainRequest()
  xdr.onload = function () {
    var strResponse = xdr.responseText
    console.log('XDR response: ' + strResponse, 'msgServer')

    outerPagePtr.postMessage('XDR Response: ' + strResponse, outerPageOrigin)
  }

  xdr.open('POST', url)
  xdr.send('RequestedVia=XDRProxy')
}
