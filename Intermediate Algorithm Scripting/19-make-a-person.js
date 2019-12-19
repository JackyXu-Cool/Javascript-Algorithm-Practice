class Person {
  constructor(name) {
    this._name = name;
  }
  get FirstName() {
    let space = this._name.indexOf(" ");
    return this._name.substring(0, space);
  }
  get FullName() {
    return this._name;
  }
  get LastName() {
   let space = this._name.indexOf(" ");
   return this._name.substring(space + 1);
  }
  set FirstName(first) {
    this._name = first + " " + this.LastName;
  }
  set LastName(last) {
    this._name = this.FirstName + " " + last;
  }
  set FullName(firstAndLast) {
    this._name = firstAndLast;
  }
}

var bob = new Person('Bob Ross');
bob.FirstName = 'Tom';
console.log(bob.FullName);