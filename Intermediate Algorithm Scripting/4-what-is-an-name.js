function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  let keys = Object.keys(source);
  arr = collection.filter(function(obj){
    for (let i = 0; i < keys.length; i++) {
      if(!obj.hasOwnProperty(keys[i]) || source[keys[i]] != obj[keys[i]]) {
        return false;
      }
    }
    return true;
  })
   return arr;
  }

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, 
{ first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));