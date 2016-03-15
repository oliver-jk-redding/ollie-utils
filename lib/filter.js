module.exports = function (func, arr) {
  var newArray = arr.filter(function(x) {
    if(func(x)) {
      return x;
    }
  });
  return newArray;
}
