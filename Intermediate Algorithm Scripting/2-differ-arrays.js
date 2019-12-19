function diffArray(arr1, arr2) {
  let newArr = [];
  // Same, same; but different.
  let sameArr = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        sameArr.push(arr1[i]);
        break;
      }
    }
  }
  for (let i = 0; i < arr1.length; i++) {
    let notSame = true;
    for (let j = 0; j < sameArr.length; j++) {
      if (sameArr[j] === arr1[i]) {
        notSame = false;
        break;
      }
    }
    if(notSame) {
      newArr.push(arr1[i]);
    }
  }
   for (let i = 0; i < arr2.length; i++) {
    let notSame = true;
    for (let j = 0; j < sameArr.length; j++) {
      if (sameArr[j] === arr2[i]) {
        notSame = false;
        break;
      }
    }
    if(notSame) {
      newArr.push(arr2[i]);
    }
  }
  return newArr;
}
console.log(diffArray([1,2,3],[1,4,2]));