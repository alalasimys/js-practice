//5.6.1
/*
function camelize(str) {
  return str
    .split("-") // разбивает 'my-long-word' на массив ['my', 'long', 'word']
    .map(
      // Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
      // превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
      (word, index) =>
        index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(""); // соединяет ['my', 'Long', 'Word'] в 'myLongWord'
}
// console.log(camelize("background-color")); // == 'backgroundColor';
// console.log(camelize("list-style-image")); // == 'listStyleImage';
// console.log(camelize("-webkit-transition")); // == 'WebkitTransition';
//5.6.2
let arr = [5, 3, 8, 1];
function filterRange(arr, a, b) {
  return arr.filter((item) => item >= a && item <= b);
}
let filtered = filterRange(arr, 1, 4);
// console.log(filtered);
*/

//5.6.3
/*
let arr = [5, 3, 8, 1];

function filterRangeInPlace(arr, a, b) {
  arr.forEach((item) => {
    if (item < a || item > b) {
      arr.splice(arr.indexOf(item), 1);
    }
  });
}

console.log(filterRangeInPlace(arr, 1, 4)); // удалены числа вне диапазона 1..4

console.log(arr); // [3, 1]
*/

//5.6.4
/*
let arr = [5, 2, 1, -10, 8];
arr.sort((a, b) => b - a);
console.log(arr);
*/

//5.6.5
/*
let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

function copySorted(arr) {
  return [...arr].sort((a, b) => a.localeCompare(b));
}
console.log(arr);
console.log(sorted);
*/

//5.6.6
/*
function Calculator() {
  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b,
    "*": (a, b) => a * b,
  };

  this.calculate = function (str) {
    return eval(str);
  };

  this.addMethod = function (name, func) {
    return (this.methods[name] = func);
  };
}

let calc = new Calculator();
console.log(calc.calculate("3 + 7"));

let powerCalc = new Calculator();
console.log(powerCalc.addMethod("*", (a, b) => a * b));
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log(result); // 8
*/

//5.6.7
/*
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [vasya, petya, masha];

let names = users.map((person) => person.name);

console.log(names); // Вася, Петя, Маша
*/

//5.6.8
/*
let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [vasya, petya, masha];

let usersMapped = users.reduce((newArr, person) => {
  let newObj = {};
  newObj.fullName = `${person.name} ${person.surname}`;
  newObj.id = person.id;
  newArr.push(newObj);
  return newArr;
}, []);

console.log(usersMapped);
console.log(usersMapped[0].id); // 1
console.log(usersMapped[0].fullName); // Вася Пупкин
*/

//5.6.9
/*
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [vasya, petya, masha];

function sortByAge(arr) {
  return arr.sort((a, b) => a.age - b.age);
}

sortByAge(arr);

// теперь: [vasya, masha, petya]
console.log(arr[0].name); // Вася
console.log(arr[1].name); // Маша
console.log(arr[2].name); // Петя
*/

//5.6.10
/*
let arr = [1, 2, 3];

function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

shuffle(arr);
// arr = [3, 2, 1]

shuffle(arr);
// arr = [2, 1, 3]

shuffle(arr);
// arr = [3, 1, 2]
*/

//5.6.11
/*
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [vasya, petya, masha];

function getAverageAge(array) {
  return (
    array.reduce((total, person) => (total += person.age), 0) / array.length
  );
}

console.log(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28
*/

//5.6.12
function unique(arr) {
  return arr.filter((item, index, arr) => arr.indexOf(item) === index);
}

let strings = [
  "кришна",
  "кришна",
  "харе",
  "харе",
  "харе",
  "харе",
  "кришна",
  "кришна",
  ":-O",
];

console.log(unique(strings)); // кришна, харе, :-O
