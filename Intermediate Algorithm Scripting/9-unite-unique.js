function uniteUnique(arr) {
  let newArr = [];
  let inputArr = Array.from(arguments);
  for(let i = 0; i < inputArr.length; i++) {
    let temp = inputArr[i].filter(value => {
      return !newArr.includes(value);
    });
    newArr.push(...temp);
  }
  return newArr;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
