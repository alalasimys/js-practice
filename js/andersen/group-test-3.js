//1   Когда формируется лексическое окружение функции?
//2 Когда формируется контекст вызова?
//3 Куда передается контекст функции? - callstack
//4
// function foo() {
//   return function bsr() {
//     console.log(this);
//     return () => console.log(this);
//   };
// }

// const a = foo().call({ x: 10 });
// a.call({ x: 20 });
//2
// function qoo() {
//   qoo.x = 30;
//   const { x } = this;
//   console.log(x);
// }

// qoo.x = 10;

// qoo.call(qoo, 20);
//3
// function foo(...rest) {
//   console.log(this, rest);
// }
// const bar = foo.bind({ x: 10 }, 20).bind({ y: 30 }, 40);
// bar();

// const map = Array.prototype.map.bind([10, 20], (v) => console.log(v));
// map([30, 40]);
//4
// class User {
//   static x = 10;
//   x = 20;
//   methiod = () => {
//     const x = 30;
//     console.log(this.x);
//   };
//   do() {
//     const x = 40;

//     setTimeout(() => {
//       this.methiod();
//     }, 0);
// function outerFunction() {
//   const innerCalculation = 10 + 35;
//   console.log(innerCalculation, "innerCalculation");
//   return innerFunction();

//   function innerFunction() {
//     return calcSquare(10);
//   }
// }

// const result = outerFunction();
// console.log(result, "result");

// function calcSquare(x) {
//   return x * x;
// }
//----------------------------------
// function logThis() {
//   console.log("logThis", this);
// }
// logThis(); //undedined

// const objLogThis = {
//   value: 100,
//   logThis,
// };
// objLogThis.logThis();

// function User() {
//   console.log(this);
// }
// new User();
// //----------------------------------
// const userThis = {
//   name: "Roman",
//   closeApp() {
//     console.log(`${this.name} has just closed app!`);
//   },
// };
// setTimeout(userThis.closeApp, 1000); //has just closed app!
// setTimeout(() => userThis.closeApp(), 1000); //Roman has just closed app!

//17 --- 10

// const x = 10;
// function foo(f) {
//   const x = 20;
//   const baz = f();
//   baz();
// }
// foo(bar);
// function bar() {
//   return () => console.log(x); //10
// }

//20

// const obj = {
//   x: 10,
//   foo() {
//     const x = 20;
//     return this.baz;
//   },
//   baz: () => console.log(this.x),
// };
// const x = 30;
// obj.foo()(); //Cannot read property 'x' of undefined

//21

// class User {
//   static x = 10;
//   x = 20;

//   someMethod = () => {
//     const x = 30;
//     console.log(this.x);
//   };

//   do() {
//     const x = 50;

//     setTimeout(() => this.someMethod, 0);
//   }
// }

// const x = 50;
// const user = new User();
// user.do();
//5
const obj = {
  x: 10,
  foo() {
    const x = 20;
    return this.baz;
  },
  baz: () => console.log(this.x),
};

const x = 30;

obj.foo()();

//----------------------------------

// const user = new User();
// console.log(user);
// console.log(user.someMethod()); //20
// console.log(user.do()); //undefined - because settimeout

//22 --- 10
//   ---  20
// const map = Array.prototype.map.bind([10, 20], (v) => console.log(v));
// map([30, 40]);

//23 --- { x: 10 }, [20,40]
// function foo(...rest) {
//   console.log(this, rest);
// }
// const bar = foo.bind({ x: 10 }, 20).bind({ y: 30 }, 40);
// bar();
