function pairElement(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    let temp = [];
    let base = str.substring(i, i+1);
    temp.push(base);
    if (base === 'A'){
      temp.push('T');
    } else if (base === 'T') {
      temp.push('A');
    } else if (base === 'C') {
      temp.push('G');
    } else if (base === 'G') {
      temp.push('C');
    }
    result.push(temp);
  }
  return result;
}

console.log(pairElement("GCG"));