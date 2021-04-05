// "" + 1 + 0 = "10";
// "" - 1 + 0 = -1;
// true + false = 1;
// 6 / "3" = 2;
// "2" * "3" = 6;
// 4 + 5 + "px" = "9px";
// "$" + 4 + 5 = "$45";
// "4" - 2 = 2;
// "4px" - 2 = NaN;
// 7 / 0 = Infinity;
// "  -9  " + 5 = " -9 5";
// "  -9  " - 5 = -14;
// null + 1 = 1;
// undefined + 1 = NaN;
// " \t \n" - 2 = -2;

// const question = prompt("Какое «официальное» название JavaScript?", "");
// if (question === "ECMAScript") {
//   alert("Верно");
// } else {
//   alert("Не знаете? ECMAScript");
// }
//---Замыкание
// const sum = (a = 0) => {
//   return (b) => {
//     if (!b && typeof b !== "number") return a;
//     return sum(a + b);
//   };
// };

// console.log(sum(1)(2)(3)(10)()); //16
// ---------------------------------------
// let i = 0;
// while (++i < 5) alert(i); //from 0 to 4

// let i = 0;
// while (i++ < 5) alert(i); from 0 to 5
// ---------------------------------------
// let message = prompt("Введите число", "");
// while (message < 100) {
//   if (message === null) break;
//   message = prompt("Введите еще раз", "");
// }

// -----Вывести простые числа

/* 
let n = 10;
mark: for (let i = 2; i <= n; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j === 0) continue mark;
  }
  alert(i);
}
*/

/*
function showPrimes(n) {
  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;
    alert(i);
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
showPrimes(10);
*/
// -----
// function checkAge(age) {
//   // return age > 18 ? true : confirm("Родители разрешили?");
//   return age > 18 || confirm("Родители разрешили?");
// }
// -----
/*
function min(a, b) {
  return a < b ? a : b;
}
*/
// -----
/*
function ask(question, yes, no) {
  if (confirm(question)) {
    yes();
  }
  no();
}
ask(
  "Вы согласны?",
  function () {
    alert("Вы согласились.");
  },
  function () {
    alert("Вы отменили выполнение.");
  }
);
*/
// -----
//Function declaration
/*
let age = prompt("What is your age?");

if (age < 18) {
  function welcome() {
    alert("Hello");
  }
} else {
  function welcome() {
    alert("Good day");
  }
}
welcome();
*/
//Function Expression
let age = prompt("What is your age?");

let welcome;
if (age < 18) {
  welcome = function () {
    alert("Hello");
  };
} else {
  welcome = function () {
    alert("Good day");
  };
}
welcome();
