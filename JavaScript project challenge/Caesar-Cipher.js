function rot13(str) { // LBH QVQ VG!
  let result = '';
  let first = /[A-M]/;
  let second = /[N-Z]/;
  for(let i = 0; i < str.length; i++) {
    let temp = str.charAt(i);
    if(first.test(temp)){
      result += first13(temp);
    } else if(second.test(temp)){
      result += second13(temp);
    } else {
      result += temp;
    }
  }
  return result;
}

function first13(str){
  if(str == 'A'){
    return 'N';
  } else if(str === 'B') {
    return 'O';
  }  else if(str === 'C') {
    return 'P';
  }  else if(str === 'D') {
    return 'Q';
  }  else if(str === 'E') {
    return 'R';
  }  else if(str === 'F') {
    return 'S';
  }  else if(str === 'G') {
    return 'T';
  }  else if(str === 'H') {
    return 'U';
  }  else if(str === 'I') {
    return 'V';
  }  else if(str === 'J') {
    return 'W';
  }  else if(str === 'K') {
    return 'X';
  }  else if(str === 'L') {
     return 'Y';   
  }  else {
     return 'Z'; 
  }
}

function second13(str){
  if(str === 'N'){
    return 'A';
  } else if(str === 'O') {
    return 'B';
  }  else if(str === 'P') {
    return 'C';
  }  else if(str === 'Q') {
    return 'D';
  }  else if(str === 'R') {
    return 'E';
  }  else if(str === 'S') {
    return 'F';
  }  else if(str === 'T') {
    return 'G';
  }  else if(str === 'U') {
    return 'H';
  }  else if(str === 'V') {
    return 'I';
  }  else if(str === 'W') {
    return 'J';
  }  else if(str === 'X') {
    return 'K';
  }  else if(str === 'Y') {
     return 'L';   
  }  else {
     return 'M'; 
  }
}