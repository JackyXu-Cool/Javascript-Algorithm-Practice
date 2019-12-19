function smallestCommons(arr) {
  let smallestCommons = 1;
  if(arr[1] - arr[0] > 0) {
    for(let i = arr[0]; i <= arr[1]; i++) {
      let biggestDivisor = gcd(smallestCommons, i);
      smallestCommons *= i;
      smallestCommons /= biggestDivisor;
    }
  } else {
    for(let i = arr[0]; i >= arr[1]; i--) {
      let biggestDivisor = gcd(smallestCommons, i);
      smallestCommons *= i;
      smallestCommons /= biggestDivisor;
    }
  }
  return smallestCommons;
}
function gcd(first, second) {
  let min = Math.min(first, second);
  let gcd = 1;
  for(let i = 2; i <= min; i++) {
    if(first % i === 0 && second % i ===0) {
      gcd = i;
    }
  }
  return gcd;
}


console.log(smallestCommons([2,10]));
