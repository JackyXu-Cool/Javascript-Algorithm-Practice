// Another solution provided by FCC use the arrayName.shift(), which
// delete the first element in this array and return its value; It uses a for loop and 
// wheneve the function return true for the first element in an array, break the loop.
// Otherwise, delete the first element in an array.

function dropElements(arr, func) {
    let firstElementSatisfy = false;
    let resultArr = arr.filter(number => {
      if(func(number)) {
        firstElementSatisfy = true;
      }
      return firstElementSatisfy;
    })
    return resultArr;
}

console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}));