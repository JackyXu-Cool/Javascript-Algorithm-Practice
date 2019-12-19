function sumFibs(num) {
  let first = 1;
  let second = 1;
  let allNumber = [];
  allNumber.push(first);
  allNumber.push(second);
  while(first + second <= num) {
    let current = first + second;
    allNumber.push(current);
    let temp = second;
    second = current;
    first = temp;
  }
  let sum = 0;
  allNumber.forEach(number => {
    if(number % 2 !== 0) {
      sum += number;
    }
  })
  return sum;
}

console.log(sumFibs(75025));