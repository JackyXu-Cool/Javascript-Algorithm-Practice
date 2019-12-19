// The use of arrayName.join() / arrayName.join("");
// The first one convert an array to string with comma between each element.
// The second one do the same thing except there is no comma.

/** Also another solution provided by FCC is to use strName.replace(A, B); 
    "A" is a regular expression, "B" is a string which will replace the 
    corresponding part of the string that matches the regex.
*/

function convertHTML(str) {
    let HTMLtag = /&|"|'|<|>/;
    if(HTMLtag.test(str)){
      let strApart = Array.from(str);
      let newStrArray = strApart.map(character => {
         if(HTMLtag.test(character)) {
           if(character === '&') {
             return '&amp;';
           } else if (character === '<') {
             return '&lt;';
           } else if (character === '>') {
             return '&gt;';
           } else if (character === '"') {
             return '&quot;';
           } else if (character === "'") {
             return '&apos;';
           }
         } else {
           return character;
         }
      });
      return newStrArray.join("");
    } else {
      return str;
    }
}

console.log(convertHTML("Dolce & Gabbana"));


