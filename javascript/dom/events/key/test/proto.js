function getPrototypes (obj) {
  var collect = Object.create(null)

  function get (obj) {
    var proto = Object.getPrototypeOf(obj)
    console.log(proto)
    if (!proto) return
    collect[proto.constructor.name] = Object.getOwnPropertyNames(proto)
    get(proto)
  }

  get(obj)
  return collect
}
