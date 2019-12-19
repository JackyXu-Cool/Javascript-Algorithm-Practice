// This exercise make use of String.fromCharCode(charcode)
// and stringName.charCodeAt(index)

function fearNotLetter(str) {
  let missingValue;
  let firstCode = str.charCodeAt(0);
  for (let i = 1; i < str.length; i++) {
    if(str.charCodeAt(i) != firstCode + i) {
       missingValue = String.fromCharCode(firstCode+i);
       break;
    }
  }
  return missingValue;
}

console.log(fearNotLetter("abcde"));
