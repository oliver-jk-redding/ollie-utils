# ollie-utils

countIf: returns a count of the number of items present in an array that match the object specified by a given function.

countIf(FUNCTION TO FILTER ITEMS OF A SPECIFIC TYPE, ARRAY)

The below example counts all the number objects in a mixed array and returns that count.
e.g. countIf(function(thing) {
      return Number.isInteger(thing)
    }, [1, 'hello', 2, 3, 'goodbye'])

filter: returns an array of filtered objects.

filter(FUNCTION TO FILTER ITEMS OF A SPECIFIC TYPE, ARRAY)

The below example passes each element in an array through a given filter and returns that filtered array. The filtered array will only contain strings with commas.
e.g. filter(function(str) {
      if(str.includes(',')) {
        return true;
      }
      else return false;
     }, ['hi', 'hi, me' 'hi, you' 'bye'])

map: transforms an array using a given function and returns the transformed array.

map(FUNCTION TO PERFORM ON ITEMS, ARRAY)

The below example changes each element in an array via a given function and returns that transformed array. The function splits each array at the comma into two arrays.
e.g. map(function(str) {
      return str.split(",");
     }, ['hi,world', 'hi, me' 'hi, you' 'bye, you'])
