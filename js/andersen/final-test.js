// console.log("1", x);
// for (let i = 1; i <= 2; i++) {
//   var x = 10 + i;
//   let y = 20 + i;
// }

// console.log("2", x);
// console.log("3", y);
//2
// const x = ((x) => {
//   x = 30;
// })(10);
// console.log(x);
// const y = x();
// console.log(y);
//3
// const x = 10;

// function foo(f) {
//   const x = 20;
//   const baz = f();
//   baz();
// }

// foo(bar);
// function bar() {
//   return () => console.log(x);
// }
//4
// const x = 10;
// const y = Boolean(x);
// console.log(y.__proto__ === Boolean.prototype);
// console.log(Object.__proto__);
// Promise.reject(0)
//   .catch((err) => {
//     console.log(err);
//   })
//   .then(Number)
//   .catch(10)
//   .catch(Boolean)
//   .catch((err) => console.log(err))
//   .then(20)
//   .then((v) => {
//     console.log(v);
//     return () => 30;
//   })
//   .then((v) => {
//     console.log(v);
//     console.log(typeof v);
//   });
