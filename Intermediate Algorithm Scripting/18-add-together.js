function addTogether() {
    if(arguments.length == 1) {
      if(typeof arguments[0] != 'number') {
        return undefined;
      } else {
        const previous = arguments[0];
        return function() {
          if(typeof arguments[0] != 'number') {
            return undefined;
          }
          return arguments[0] + previous;
        };
      }
    } else {
      if(typeof arguments[0] != 'number' || typeof arguments[1] != 'number') {
        return undefined;
      } else {
        return arguments[0] + arguments[1];
      }
    }
}
console.log(addTogether(2)(3));

// Another solution provided by FCC

/**
function addTogether(first, second) {
    if(typeof first !== 'number') {
      return undefined;
    }
    const sum = (second) => 
      typeof second !== 'number' ? undefined: first + second;
    return typeof second === 'undefined' ? function(second) { return sum(second)}
    :sum(second);
}

*/
/** 1. determine if first element is a number (return undefined if it is not a number)
    2. determine if second element exists or not (use undefined)
    3a. if exist, directly return the result of sum(second);
    3b. if does not exist, return a function that takes in second as a parameter and return the 
    the result of sum(second);
*/ 