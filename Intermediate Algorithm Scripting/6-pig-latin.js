function translatePigLatin(str) {
  let vowelRegex = /a|e|i|o|u/;
  let specialvowel = /(schw)/;
  let firstCharacter = str.substring(0,1);
  if(vowelRegex.test(firstCharacter)) {
    str = str + 'way';
  } else if (specialvowel.test(str.substring(0,4))) {
    str = str.substring(4) + 'schway';
  } else {
    let temp = "";
    let index = 1;
    // Check whether the consonant cluster, because it might be
    // a few character. Stop until the first vowel appears.
    for (let i = 1; i < str.length; i++) {
      if(!vowelRegex.test(str.substring(i,i+1))) {
         temp += str.substring(i, i+1);
         index++;
      } else {
        break;
      }
    }
    firstCharacter += temp;
    str = str.substring(index) + firstCharacter + 'ay';
  }
  return str;
}

console.log(translatePigLatin("algorithm"));