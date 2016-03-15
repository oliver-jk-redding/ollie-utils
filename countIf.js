module.exports = function (testFunc, arr) {
  var count = 0;
  for(var i = 0; i < arr.length; i++) {
    if(testFunc(arr[i])) {
      count++;
    }
  }
  return count;
}
