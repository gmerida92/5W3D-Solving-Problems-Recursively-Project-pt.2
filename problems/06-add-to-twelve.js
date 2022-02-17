/***********************************************************************
Write a recursive function called `addToTwelve` that will return true if there
are two adjacent numbers in the input array that can sum up to 12. Otherwise,
return false.

Examples:

addToTwelve([1, 3, 4, 7, 5]); // true
addToTwelve([1, 3, 4, 7, 6]); // false
addToTwelve([1, 11, 4, 7, 6]); // true
addToTwelve([1, 12, 4, 7, 6]); // false
addToTwelve([1]); // false
***********************************************************************/

debugger

// function addToTwelve(arr) {
//   if (arr.length === 0) return false;
//   else if (arr.length === 2 && (12 - arr[0] !== arr[1])) return false;
//   else if (addToTwelveHelper(arr, arr[0])) return true;
//   return addToTwelve(arr.slice(1));
// }

// function addToTwelveHelper(arr, currentOuterNum) {
//   if (12 - arr[0] === currentOuterNum) return true;
//   else if (arr.length === 0) return false;
//   return addToTwelveHelper(arr.slice(1), currentOuterNum)
// }

function addToTwelve(arr) {
  if (arr.length === 0) return false;
  if (arr[0] + arr[1] === 12) return true;

  return addToTwelve(arr.slice(1));
}

console.log(addToTwelve([1, 3, 4, 7, 6])); // false
console.log(addToTwelve([1, 3, 4, 7, 5])); // true
console.log(addToTwelve([1, 11, 4, 7, 6])); // true
console.log(addToTwelve([1, 12, 4, 7, 6])); // false
console.log(addToTwelve([1])); // false


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = addToTwelve;
} catch (e) {
  module.exports = null;
}
