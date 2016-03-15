var assert = require('./assert')
var data = require('../lib/data')
var index = require('../lib/index')
var expectedArrayOfArrays = require('../lib/array-of-arrays')
var expectedFormattedDates = require('../lib/formatted-dates')

function each (func, arr) {
  for (var i = 0; i < arr.length; i++) {
    func(arr[i])
  }
}

function isNumber (thing) {
  return Number.isInteger(thing)
}

function isEmail (str) {
  if(str.includes('@')) {
    var idx = str.indexOf('@');
    if(str.includes('.', idx)) {
      return true;
    }
    else return false;
  }
  else return false;
}

function filterStringsWithCommas (str) {
  if(str.includes(',')) {
    return true;
    }
    else return false;
}


function splitStringByCommas (str) {
  return str.split(",");
}


// TESTS
var meaningOfLife = '42'

var mixedArray = [1, '21', null, Date.now(), 5, meaningOfLife, 42]
var expectedNumberCount = 4 // why are there 4 expected number data-types?  What are they?
var expectedStringCount = 2
var numberCount = index.countIf(isNumber, mixedArray)
var stringCount = index.countIf(function (x) { return typeof x === 'string' }, mixedArray)

assert( numberCount, expectedNumberCount, 'countIf can count the numbers in an array' )
assert( stringCount, expectedStringCount, 'countIf can count the strings in an array' )

assert(isEmail('thedonald@makeamericagreatagain.com'), true, 'isEmail detects an email')
assert(isEmail('3333@'), false, 'isEmail does not give a false positive')
var emails = index.filter(isEmail, data)
assert( emails.length, 44, 'filter and isEmail returns the correct number of emails' )

var stringsWithCommas = index.filter(filterStringsWithCommas, data)
assert( stringsWithCommas.length, 62, 'filter and filterStringsWithCommas returns the correct number of commas' )


var arrayOfArrays = index.map(splitStringByCommas, stringsWithCommas)
var matchesArrayOfArrays = arrayOfArrays.every(function (arr, i) {
  return arr.every(function (str, j) {
    return str === expectedArrayOfArrays[i][j]
  })
})

assert( matchesArrayOfArrays, true, 'the generated array of array of strings matches the expected array' )


