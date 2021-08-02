function sanitaze(arr) {
  return arr.filter((item, index, arr) => arr.indexOf(item) === index);
}

// console.log(sanitaze([1, 2, 3, 3, 4, 5, 1, 5, 'f', 'r', 'd', 'f']))

// function stringReverse(str) {
//   return str.split("").reverse().join("")
// }

// console.log(stringReverse('test')) // tset

// console.log(1);

// setTimeout(() => {
//   console.log(2);
// });

// Promise.resolve(3).then(console.log);

// console.log(4);

//1432

// ("use strict");
// function test() {
//   console.log("this from test", this); //undefined
// }

// const func = () => 4;
// test.x = 778789989789;

// console.log("test() + new test()", test() + new test()); // undefined[object Object]
// console.log("new test()", new test()); // test {}

// test.bind(1).bind(2)(); // 1
// test.apply(123); // 123

// const obj = {
//   x: 333,
//   m() {
//     console.log("this.x from obj", this.x);
//   },
// };

// obj.m(); // 123
// console.log("obj.m.call(test)", obj.m.call(test)); // this.x from obj 333 ; this.x from obj 778789989789 ; obj.m.call(test) undefined

// class A {
//   static x = 555555;
// }

// class B extends A {}

// const c = new B();

// console.log(c instanceof A); // true
// console.log(c.__proto__.__proto__ === A.prototype); // true

// console.log("42" == 1) // false

// var str = "test"
// str[0] = "r"
// console.log(str) //"test"

/*
Event loop mirco очередность
функции как классы - во что траспилируються классы и функции 
*/
