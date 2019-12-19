function spinalCase(str) {
  let temp = "";
  str = str.substring(0,1).toLowerCase() + str.substring(1);
  while(str.length > 0) {
    let match = str.match(/\s|_/);
    let index = str.indexOf(match);
    if(index === -1) {
      temp += str;
      str = "";
    } else {
      temp += str.substring(0, index) + "-";
      str = str.substring(index + 1);
    }
  }
  let temp2 = "";
  while(temp.length > 0) {
    let match = temp.match(/[A-Z]/);
    let index = temp.indexOf(match);
    if(index != -1 && /[a-z]/.test(temp[index-1])) {
      temp2 += temp.substring(0, index) + "-" + temp.substring(index, index+1);
      temp = temp.substring(index + 1);
    } else {
      temp2 += temp;
      temp = "";
    }    
  }
  return temp2.toLowerCase();
}

console.log(spinalCase("AllThe-small Things"));