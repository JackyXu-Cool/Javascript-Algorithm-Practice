function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  let result = [];
  for(let i = 0; i < arr.length; i++) {
    let information = {};
    information.name = arr[i]["name"];
    information.orbitalPeriod = Math.round(Math.PI * 2 * 
      Math.sqrt(Math.pow(earthRadius+arr[i]["avgAlt"],3)/GM));
    result.push(information);
  }
  return result;
}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));

// The solution provided by FCC is to make changes on the parameter 'arr'.
// The method deletes its 'avgAlt' key and add a 'orbitalPeriod' key.