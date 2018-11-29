function fast(fn) {
  let cache = new Map();
  return function(arg) {
    if(cache.get(arg)) {
      console.log("serving from cache...");
      return cache.get(arg);
    }
    else {
      let result = fn(arg);
      cache.set(arg, result)
      console.log("not available in cache, calling actual implementation to get result...");
      return result;
    }
  }
}

function slowGetX(x) {
  return x;
}

let getX = fast(slowGetX);
