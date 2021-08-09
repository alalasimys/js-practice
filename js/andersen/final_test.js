//1 -- 40, 10, 60, 20, "other", 10, 20, 30, "setTimeout"
/*
setTimeout(() => {
  console.log("setTimeout");
}, 0);

async function bar() {
  console.log(10);
  await "";
  console.log(20);
  return 30;
}

async function foo() {
  console.log(40);
  bar();

  const data1 = await "other";
  console.log(data1);

  await 50;

  const data2 = await bar();
  console.log(data2);
}

foo();

console.log(60);
*/
//2 --  Промис ready должен резолвиться только через вызов метода doReady
/*
 class Person {
  constructor() {
    this.ready = new Promise((resolve) => {
      this.resolveHandler = resolve;
    });
  }

  doReady(value) {
    this.resolveHandler(value);
  }
}

const p = new Person();
console.log(p);
p.ready.then((value) => console.log(value));
p.doReady(100);
*/
//3
// let id;

// Promise.reject(10)
//   .then(undefined, (v) => v + 10)
//   .catch((v) => console.log("catch1", v))
//   .then((v) => console.log.bind(null, "then1", v))
//   .then((resolve) => {
//     id = 60;
//     resolve(40);

//     setTimeout(() => {
//       console.log("id3", id);
//       return 90;
//     }, 1000);

//     setTimeout(() => {
//       id = 70;
//       resolve(50);
//       return 30;
//     }, 0);
//   })
//   .catch((v) => console.log("catch2", v))
//   .then(
//     (v) => console.log("then2", v),
//     (v) => console.log("catch3", v)
//   )
//   .then(() => console.log("id1", id));

// console.log("id2", id);
//4
// let id;

// const promise = new Promise((res, rej) => {
//   let innerId = 20;

//   setTimeout(() => {
//     innerId = 30;
//     id = innerId;

//     res(10);

//     innerId = 40;
//     id = innerId;

//     rej(60);

//     innerId = 70;
//     id = innerId;
//   }, 0);
// });

// console.log("id1", id); //id1 undefined

// promise.then(() => console.log("id2", id)); //id1 70
//5
/*
const doSomething = () =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve(10);
    }, 1000)
  );

const doSomethingElse1 = () =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve(20);
    }, 2000)
  );

const doSomethingElse2 = () =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve(30);
    }, 3000)
  );

const finalHandler1 = (value) => {
  console.log("finalHandler1", value);
  return 40;
};

const finalHandler2 = (value) => {
  console.log("finalHandler2", value);
  return 50;
};
//finalHandler1 undefined => then 20 => finalHandler2 undefined
doSomething()
  .then(doSomethingElse1) //20 from doSomethingElse1
  .then((value) => {
    console.log("then", value); //then 20
    doSomethingElse2();
  })
  .then(finalHandler1())
  .then(finalHandler2);
*/
//6 --- catch1 0 ==> then1 false ==> then2 () => 30 ==> typeof function
// Promise.reject(0)
//   .catch((err) => {
//     console.log("catch1", err);
//     return Promise.reject(0);
//   })
//   .then(Number)
//   .catch(10)
//   .catch(Boolean)
//   .catch((err) => {
//     console.log("catch2", err);
//   })
//   .then(20)
//   .then((v) => {
//     console.log("then1", v);
//     return () => 30;
//   })
//   .then((v) => {
//     console.log("then2", v);
//     console.log("typeof", typeof v);
//   });

//7 ----- People:  Max | Stan | Will

// const people = [
//   { name: "Max", age: 20 },
//   { name: "Stan", age: 21 },
//   { name: "Will", age: 15 },
// ];

// function addToBegin(str) {
//   return (newStr) => `${str} ${newStr}`;
// }

// function getArrayOfPeopel(str) {
//   return (arr) => arr.map((elem) => elem[str]);
// }

// function join(separator) {
//   return (arr) => arr.join(separator);
// }

// const compose = (...fns) => {
//   return (data) => fns.reduceRight((v, f) => f(v), data);
// };

// const composedFoo = compose(
//   addToBegin("People: "),
//   join(" | "),
//   getArrayOfPeopel("name")
// );

// console.log(composedFoo(people)); //People:  Max | Stan | Will

// 8

// const add = (x) => (y) => x + y;
// const mul = (x) => (y) => x * y;

// const pipe =
//   (...fns) =>
//   (x) =>
//     fns.reduce((v, f) => f(v), x);

// const pipedFoo = pipe(add(2), mul(2));
// console.log(pipedFoo(4)); //12

//9

// const obj1 = {
//   x: 10,
// };
// function foo(obj) {
//   return { y: 20, ...obj };
// }
// const obj2 = foo(obj1);

//10 -- v: 20, x: 10, r: undefined

// const x = 10;

// function foo(f) {
//   const x = 20;
//   this.x = 30;

//   const bar = () => {
//     f.x = 40;
//     this.x = 50;

//     const baz = f(x);

//     baz.x = 60;

//     return baz(this.x);
//   };

//   bar.x = 70;

//   return bar();
// }

// foo.x = 80;

// const someFunc = (v) => () => {
//   console.log("v", v);
//   console.log("x", x);
// };

// const r = foo.call({ x: 90 }, someFunc);

// console.log("r", r);

//11
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   getName() {
//     return this.name;
//   }
// }

// function newOp(Contructor, ...props) {
//   const obj = Object.create(Contructor.prototype);
//   Contructor.call(obj, ...props);
//   return obj;
// }

// const person = newOp(Person, "Max", 20);
// console.log(person);
// console.log(person.getName());

//12
// class Person {
//   getName() {}
// }
// class Student extends Person {
//   getAge() {}
// }

// const p = new Person();
// const s = new Student();

// console.log(Person.prototype); //{constructor: ƒ, getName: ƒ}
// console.log(Student.prototype); //Person {constructor: ƒ, getAge: ƒ}
// console.log(p.__proto__); //{constructor: ƒ, getAge: ƒ}
// console.log(s.__proto__); //Person {constructor: ƒ, getAge: ƒ}
// console.log(s.prototype); //undefined
//13
// const person = {
//   age: 20,
// };

// function setAge(age) {
//   this.age = age;
// }

// const setPersonAge = (age) => setAge.call(person, age);
// setPersonAge(30);
// console.log(person); //30
//14
// const x = ((x) => {
//   x = 30;
// })(10);
// const y = x(); //x is not a function
// console.log(y);
//15 --- 10 - this === obj = { x: 10 };
// const x = 0;
// const obj = { x: 10 };

// function foo() {
//   const obj = { x: 20 };
//   const f = () => console.log(this.x);
//   f.x = 30;
//   return f;
// }
// foo.x = 40;

// const bar = foo.call(obj, { x: 50 });
// bar.x = 60;

// bar({ x: 70 });
// bar.call({ x: 80 }, { x: 90 }, { x: 100 });

//16 ---50
// function foo(f) {
//   const x = 10;
//   f.x = 20;
//   return f.bind(this);
// }

// foo.x = 30;
// function bar() {
//   console.log(x);
// }
// bar.x = 40;
// const x = 50;
// const baz = foo(bar);
// bar.x = 60;
// baz();
