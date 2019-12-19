function destroyer(arr) {
  let back = Array.from(arguments).slice(1);
  let newArray =  arr.filter(value => {
    return !back.includes(value)
  });
  return newArray;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));