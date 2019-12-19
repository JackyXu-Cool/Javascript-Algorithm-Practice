// str.split(" ") can split the string into arrays. Each element in this array is 
// a substring of the original string seperated by space.
// E.g str = "I love coding";
// str.split(" ") // ["I","love","coding"]

function binaryAgent(str) {
  let result = "";
  let stringArr = str.split(" ");
  for (let i = 0; i < stringArr.length; i++) {
    let parsed = parseInt(stringArr[i],2);
    let character = String.fromCharCode(parsed);
    result = result.concat(character);
  }
  return result;
}

console.log(binaryAgent("01000001 01110010"));
