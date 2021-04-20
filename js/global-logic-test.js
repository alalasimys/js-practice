//===1
// console.log("" || (true && []) || false);
// console.log(++"2021");
//===2
// let number = [
//   1,
//   2,
//   3,
// ]; /*
// while (arr.length > 0) {
//   arr.pop();---yes
// }  /*
// arr.splice(
//   0,
//   arr.length
// ); ---yes*/ //---yes //---yes

// console.log(number.concat(4));

// console.log(number.pop(4));
// console.log((number[number.length] = 4));
// number.push(4);
// number = [...number, 4];
// console.log(number);

//===3
/*
const nums = [2, 3, 4, 5];

delete nums[3];
console.log(nums.length);
console.log(Boolean([]));
*/
//===4
/*
const obj = {
  name: "test",
  func: function () {
    let self = this;
    console.log(this.name, self.name);
    (function () {
      console.log(//this.name,// self.name);
    })();
  },
};
obj.func();
*/
//===5
// console.log(0 || "" || 2 || undefined || true || false);
//===6
/*
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const p1 = new Person("John", 25);
console.dir(p1);
*/
//===7
/*
const a = new Array(1, 2),
  b = new Array(3);
console.log(a);
console.log(b);
console.log(a[0] + b[0]);
*/
//===8
// const arr = [1, 3, 5, 7, 9];
// arr = []; //no
// arr.length = 0; //yes
/*for (let i = arr.length; i > 0; i--) {
  arr.pop();
}---yes*/
// console.log(arr);
//===9
/*
console.log(1 == "1", 1 === "1");
console.log(1 == true, 1 === true);
console.log(1 == "true", 1 === "true");
console.log(1 == [1], 1 === [1]);
*/
//===10 --- error
/*
const output = (function (x) {
  delete x;
  return x;
})(0);
console.log(output);
*/
//===11 --- ERROR
/*
let x = 11;
let f = function () {
  console.log(x);
  let x = 10;
};
f();
*/

// for (let i = 0; i < 5; i++) {
//   setTimeout((console.log(i), 0));
// }

// for (let i = 0; i <= 5; i++) {
//   setTimeout((console.log(i), 0));
// }
