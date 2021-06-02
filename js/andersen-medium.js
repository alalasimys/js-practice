//1 : 1243254365476
// new Date(1243254365476).getTime();

//2 : 1,3
/*
const promise = new Promise((resolve, reject) =>
  setTimeout(() => {
    console.log(1);
    reject("2");
  }, 1000)
);

promise.then((result) => console.log(2)).catch((result) => console.log(3));
*/

//3 : true
/*
const a = 5;
const b = prompt("Enter number:");
console.log(a == b);
*/

//4
/*
const a = null;
a == null;
true;
a == undefined;
true;
a === undefined;
false;
a === null;
true;
*/

//5 -- HTMLCollection(2) [div.#MyId, div.#MyId]
/*
let found = document.getElementsByClassName("#MyId");
console.log(found);
*/

//6
/*
let foundEl = document.getElementById("MyId");
foundEl.style.height = 100 + "px";
foundEl.style.width = "100px";

foundEl.style["background-color"] = "red";
foundEl.style["backgroundColor"] = "blue";
foundEl.style.backgroundColor = "yellow";
// foundEl.style.background - color = "pink"; -- false
*/

//7
/*
let from = 1;
// let import = 1; - reserved word
let exports = 1;
let required = 1;
*/

//8 -- 0
/*
const result = /\d{*}/.exec("btbrt 5,gnh 4.").index;
console.log(result);
*/

//9
/*
const a = undefined;
a == null;
true
a == undefined;
true
 a === undefined;
true
a === null;
false
*/

//10
/*
const arr = [1, 2, 3, 4, 5, "6", 7, 8, 9];
console.log([...arr.slice(0, 5), ...arr.slice(6)]);
*/

//11 -- 17
// console.log(/\s+/.exec("9,8,7,6,5,4,3,2,1 Start!").index);

//12 -- 30
/*
const obj1 = { name: "ivan", age: 25 };
const obj2 = obj1;
obj2.age += 5;
console.log(obj1.age);
*/

//13 - Событие onload используется как указатель, что веб-страница полностью загружена, включая содержание, изображения, стилевые файлы и внешние скрипты.

//14 -- () => 2() => 4
/*
const a = () => 2;
const b = () => 4;
console.log(a + b);
*/

//15
/*
const a = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(a.slice(-6));
*/

//16
/*
const object = { a: "1", b: "2" };
console.log(JSON.parse(JSON.stringify(object))); // - ссылка на объект
console.log(typeof JSON.stringify(object)); // - строка
console.log(typeof JSON.parse(object)); // - ошибка
*/
//17
/*
const date = new Date("March 4, 2017");
console.log(new Date(date.getFullYear(), date.getMonth() + 1, 0)); //Mar 31 2017 - true
console.log(new Date(date.getFullYear(), date.getMonth(), 31)); //Mar 31 2017
console.log(new Date(date.getFullYear(), date.getMonth() + 1, -1)); //Mar 30 2017
console.log(new Date(date.getFullYear(), date.getMonth(), 0)); //Feb 28 2017
*/

//18 -- 11

// for (var i = 0; i <= 10; i++) {}
// console.log(i);

//19 -- (a) => a;
/*
const a = 5;

const b = (a) => a;
console.log(b);
*/

//20 -- 4
/*
const t = setInterval(() => {
  console.log("hello");
  setTimeout(() => {
    clearInterval(t);
  }, 3000);
}, 1000);
*/

//21 -- test

// fetch("www.google.com").then((r) => {
//   console.log(r.status);
// });

//22
// const obj1 = { a: "1" };
// const obj2 = { a: "2" };
// console.log({ ...obj1, ...obj2 });

//23
// const a = /abc/;
// const b = /def/;
// console.log(a - b);

//24
// const arr = [1, 2, 3, 4, 5];
// const obj = { a: "rrr" };
// console.log([...arr, obj]);

//25
// console.log(() => () => 2);

//26
// const cities = ["a", "b"];
// console.log(cities);
// const city = [...cities, "c"];
// console.log(city);

//27
// const person = { name: "d", age: 11, job: "eee" };
// const { name, age, job } = person;

//28
// const arr = [1, 2, 3, 4, 5];

// arr.forEach((el, ind) => {
//   el + 1;
// });
// console.log(arr);

//29
// const person = { name: "ivan", age: 23 };
// person = { ...person, age: 25, job: "web" };

//30
// const date1 = new Date("March 4, 2017");
// const date2 = new Date("March 5, 2017");
// console.log(date1.getTime() < date2.getTime());
// console.log(date1.getDate() < date2.getDate());
// console.log(date1 < date2);

//31
// console.log(1 < 2 < 3);
// console.log(3 > 2 > 1);

//32
// const arr = [0, 1, 2, 3];

// console.log(arr.toString());
// console.log(String(arr));
// console.log(arr.map((el) => String(el)));
// console.log("" + arr);
// console.log(typeof JSON.stringify(arr));
// console.log(arr);

// const result = arr
//   .sort()
//   .reverse()
//   .filter((el) => el)
//   .map((el) => JSON.stringify(el))
//   .filter((el) => el)
//   .reverse()
//   .sort();

// console.log(result);

// const arr2 = [...arr].reverse();
// const arr2 = [];
// arr.forEach((item) => arr2.unshift(item));

// const arr2 = [];
// while (arr.length) {
//   arr2.push(arr.pop());
// }

// const arr2 = arr.reverse();
// console.log(arr2);

// function validate(n) {
//   const numbers = [1, 3, 5, 7];
//   return numbers.every((number) => number % n);
// }
// console.log(validate(2));
/*
const original = {
  model: "iPhoneX",
  modeln: "USA",
};

const original1 = {
  model: "gbbg",
  modeln: "gbgbg",
};

console.log({ ...original, ...original1 });
*/
// const copy = original;
// copy.modeln = "China";

// console.log(original, copy);

// const arr = [];
// for (const i = 0; i <= 10; i++) {
//   arr.push(i);
// }

//---Заполнить массив последовательными числами

// let arr = Array.from({ length: 10 }, (_, index) => index);

// let arr = [...new Array(10).keys()];

// let arr = new Array(10).map((_, index) => index); -- empty*10

// console.log(arr);

//----Функция, которая позволит сделать это multiply(5)(6)===6
// function multiply(a) {
//   return function (b) {
//     return a * b;
//   };
// }
//true
// console.log(multiply(5)(6) === 30);

// что вернет функция? -- 5 (getArr.length)
/*
const getArr = ["one", "two", "three", "four"];

const getValue = () => (undefined == null ? getArr.push(true) : false);
console.log(getValue());
*/

// What Error? - no any error
/*
const arr1 = [1, 2];
const arr2 = [1, 2];

const compare = (arr1, arr2) => {
  return (arr1 === arr2) === (JSON.stringify(arr1) === JSON.stringify(arr2));
};
console.log(arr1 === arr2);
console.log(JSON.stringify(arr1) === JSON.stringify(arr2));
console.log(compare(arr1, arr2));
*/

// answer 2 2
/*
for (var i = 0; i < 2; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0);
}
*/

// Identifier 'string' has already been declared
/*
function func() {
  let string = "i'm a variable";

  function string() {
    return "i am functions";
  }
  return string();
}

let result = parent();
console.log(result);
*/

// calculateSum([1,2,3,4,2,3,3,3,4,1])

// const calculateSum = (arr) => {
//   let sum = 0;
//   for (
//     let i = 0, elem = arr[i];
//     i < arr.length;
//     i -= arr.length, elem = arr[i]
//   ) {
//     sum += elem;
//   }
//   return sum;
// };
/*
const calculateSum = (arr) => {
  return arr.reduce((sum, el) => sum + el, 0);
};

console.log(calculateSum([1, 2, 3, 4, 2, 3, 3, 3, 4, 1]));
*/

/*
function a() {
  setTimeout(() => {
    console.log("1");
  }, 0);
  console.log("2");
}
const b = () => Promise.resolve().then(() => console.log("3"));
a();
b();

const obj = {
  a: 1,
  b: function () {
    return this.a;
  },
  c: () => this.a,
};

console.log(obj.b());
console.log(obj.c());

const m = 1;
const x = 1,
  s = 1;

console.log((m == x) == s);
*/

// Выберите среди перечисленных корректные условия проверки наличия символа "+" в строке str:
/*
str.substr("+") != -1;
true;
str.charAt("+") == true;
false;
~str.indexOf("+") - 7;
str.lastIndexOf("+") != -1;
true;
*/

//Что вернет вызов f() в последней строке кода? -- 4
/*
function addTwo() {
  var n = 0;
  return function () {
    return (n += 2);
  };
}
var f = addTwo();
console.log(f());
console.log(f());
*/
Promise.reject("a")
  .catch((p) => p + "b")
  .catch((p) => p + "c")
  .then((p) => p + "d")
  .finally((p) => p + "e")
  .then((p) => console.log(p));

// man, undefined
/*
var a = "hello";
function b() {
  if (false) {
    var a = "world";
  } else {
    var b = "man";
  }
  console.log(b);
  console.log(a);
}

b();
*/

var a = "hello";
function b() {
  console.log(a);
  var a = "world";
  console.log(a);
}
b();

//2 - Что будет выведено в консоль? - foo = "bar
/*
var foo = "foo";

function bar() {
  var foo = "bar";
  console.log(foo);
}

bar();

// 5 * index: 5
for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log("index: " + i);
  }, 1000);
}
*/

function unique(arr) {
  return Array.from(new Set(arr));
}

let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

console.log(unique(values)); // Hare,Krishna,:-O

console.log("addxx".slice(-2));

let $$ = "dddd";
console.log($$);
let _Var = 1;
console.log(_Var);

const aaa = [1, 2, 3, 4, 5, "6", 7];
// console.log(aaa.filter((i, el) => el !== 4)); //[1, 2, 3, 4]
console.log([...aaa.slice(0, 5), ...aaa.slice(6)]);
console.log(aaa.slice(-6));
console.log(
  aaa.forEach((el, ind) => {
    el += 1;
  })
);
