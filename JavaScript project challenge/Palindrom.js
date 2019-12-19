function palindrome(str) {
  // Good luck!
  str = str.replace(/[^A-Za-z0-9]/g,'');
  str = str.toUpperCase();
  let first = str.slice(0,str.length/2);
  first = reverseString(first);
  if(str.length % 2 === 0) {
    let second = str.slice(str.length/2,str.length);
    return first === second;
  } else {
    let second = str.slice(str.length/2+1,str.length);
    return first === second;
  }
}
function reverseString(str){
  let splitStirng = str.split("");
  let reverseString = splitStirng.reverse();
  let result = reverseString.join("");
  return result;
}
