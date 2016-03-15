module.exports = function (func, arr) {
  var newArray = arr.map(function(x) {
    return func(x);
  });
  return newArray;
}
