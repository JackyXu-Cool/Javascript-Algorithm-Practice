// arr.flat([depth]) is a method that creates a new array with all subarray 
// elements concatenated into it recursively up to the specified depth.
// Default value for depth is 1, which means that all elements in this array and
// every element in one-nested-level array will be included to the new array.

function steamrollArray(arr) {
  // I'm a steamroller, baby
  return arr.flat(Infinity);
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));