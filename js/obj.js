//The object is empty?
/*
function isEmpty(obj) {
  for (let prop in obj) {
    return false;
  }
  return true;
}
let schedule = {};

alert(isEmpty(schedule)); // true

schedule["8:30"] = "get up";

alert(isEmpty(schedule)); // false
*/

/*
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
let total = 0;
for (const key in salaries) {
  total += salaries[key];
}
console.log(total);
*/

/*
// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

function multiplyNumeric(obj) {
  for (const prop in obj) {
    // console.log(typeof obj[prop]);
    if (typeof obj[prop] === "number") {
      obj[prop] *= 2;
    }
  }
  return obj;
}

console.log(multiplyNumeric(menu));

// после вызова функции
menu = {
  width: 400,
  height: 600,
  title: "My menu",
};
*/

/*
let calculator = {
  read() {
    this.item1 = +prompt("item1?", 0);
    this.item2 = +prompt("item2?", 0);
  },
  sum() {
    return this.item1 + this.item2;
  },
  mul() {
    return this.item1 * this.item2;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
*/

/*
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () {
    // показывает текущую ступеньку
    alert(this.step);
    return this;
  },
};

console.log(ladder.up().up().down().showStep());
*/
/*
let obj = {};
function A() {
  return obj;
}
function B() {
  return obj;
}

let a = new A();
let b = new B();

alert(a == b); // true
*/
/*
function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function () {
    let promtValue = +prompt("Сколько нужно добавить?", 0);
    return (this.value += promtValue);
  };
}

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению

alert(accumulator.value); // выведет сумму этих значений
*/
