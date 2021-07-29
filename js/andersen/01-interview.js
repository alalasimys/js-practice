function sanitaze(arr) {
  return arr.filter((item, index, arr) => arr.indexOf(item) === index);
}

// console.log(sanitaze([1, 2, 3, 3, 4, 5, 1, 5, 'f', 'r', 'd', 'f']))

// function stringReverse(str) {
//   return str.split("").reverse().join("")
// }

// console.log(stringReverse('test')) // tset

// console.log(1)

// setTimeout(() => {
//   console.log(2)
// })

// Promise.resolve(3).then(console.log)

// console.log(4)

//1423

// 'use strict'
// function test() {
//   console.log(this)
// }

// const func = () => 4
// test.x = 778789989789

// test() +
// new test() //

// test.bind(1).bind(2)() //
// test.apply(123) //

// const obj = {
//   x: 123,
//   m(){
//     console.log(this.x)
//   }
// }

// obj.m() // 123
// obj.m.call(test) //

// class A {
//   static x = 555555
// }

// class B extends A {}

// const c = new B

// console.log(c instanceof A) // true
// console.log(c.__proto__.__proto__ === A.prototype)

// console.log("42" == 1) // false

// var str = "test"
// str[0] = "r"
// console.log(str) //

/*
Event loop mirco очередность
функции как классы - во что траспилируються классы и функции 
*/
