//1
/*
class Person {
  constructor(name) {
    console.log("__proto__ inside Person", this.__proto__); // Person
    console.log(this); //instance of Student {}
    console.log(
      "__proto__ inside Person",
      this.__proto__ === Student.prototype
    ); // true
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

class Student extends Person {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
}

const max = new Student("Max", 20);
*/
//2
/*
const obj = {
  x: 20,
};

const obj2 = Object.create(obj);

// delete obj.x; -- obj2.x undefined
delete obj2.x;

console.log(obj2.x); //20
*/
//3
/*
class User {
  constructor(name) {
    this.name = name;
  }
}

const user = new User("Max");

console.log(user.name.__proto__ === String.prototype); //true

//4
class Person {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}

class Student extends Person {
  constructor(name, age) {
    super(name);
    this.age = age;
  }

  getName() {
    console.log(`My name is ${super.getName()}`); // as Person.getName()
  }
}

const max = new Student("Max", 20);
max.getName();
*/
//5

// class U {
//   static getName() {
//     return this.name;
//   }

//   constructor(name) {
//     this.name = name;
//   }
// }

// const u = new U("Max");

// console.log(U.getName()); // U --- является сам конструктор класса U

//6

// const obj1 = {
//   x: 10,
// };
// const obj2 = {};
// Object.setPrototypeOf(obj2, obj1);
// console.log(obj2.x);

//7
/*
function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  return this.name;
};

function Student(name, age) {
  Person.call(this, name); //?
  this.age = age;
}

Student.prototype = Object.create(Person.prototype); //?
Student.prototype.constructor = Student;

const max = new Student("Max", 20);

console.log(max.getName(), max.age); // "Max", 20
*/
//8

const x = Promise.resolve(10).then(() => 20);
const y = Object.create(x);

console.log(y.__proto__ === x); //true
console.log(y.__proto__ === Promise.prototype); //false
console.log(y.__proto__ === Object.prototype); //false
console.log(y.__proto__.__proto__ === Promise.prototype); //true
console.log(y.__proto__.__proto__.__proto__ === Object.prototype); //true
console.log(y.__proto__ === null); //false

//9

// function Person(name) {
//   this.name = name;
// }

// Person.prototype.getName = () => {
//   console.log(this); //undefined
//   return this.name;
// };

// function Student(name, age) {
//   Person.call(this, name); //?
//   this.age = age;
// }

// Student.prototype = Object.create(Person.prototype); //?
// Student.prototype.constructor = Student;

// const max = new Student("Max", 20);

// console.log(max.getName(), max.age); // TypeError: Cannot read property 'name' of undefined

//10
/*
class Samurai {
  constructor(name) {
    this.name = name;
  }
  hello() {
    alert(this.name);
  }
}

const shogun = new Samurai("Alla");

console.log(shogun);
console.log(shogun.__proto__ === Samurai.prototype); //Samurai.prototype
console.log(shogun.__proto__.__proto__ === Object.prototype); //Object.prototype
console.log(shogun.__proto__.constructor.__proto__ === Function.prototype); //Function.prototype
console.log(shogun.__proto__.__proto__.__proto__ === null); //null
*/
