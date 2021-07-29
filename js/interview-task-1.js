const fruits = [
  "banana",
  "apple",
  "pineapple",
  "peach",
  "banana",
  "apple",
  "pineapple",
  "orange",
  "banana",
  "apple",
  "pineapple",
  "peach",
  "banana",
  "apple",
  "pineapple",
  "orange",
  "grapes",
];

// const obj = {};

// for (const fruit of fruits) {
//   if (!obj[fruit]) {
//     obj[fruit] = 1;
//   }

//   obj[fruit] += 1;
// }
// console.log(obj);

//2
/*
console.log(
  fruits.reduce((obj, fruit) => {
    if (!obj[fruit]) {
      obj[fruit] = 0;
    }

    obj[fruit] += 1;
    return obj;
  }, {})
);
*/

//3

function reverseNumber(n) {
  return parseFloat(n.toString().split("").reverse().join("")) * Math.sign(n);
}

//4
/*
function getStrings(city) {
  let cityObj = city
    .trim()
    .replace(" ", "")
    .toLowerCase()
    .replace(/[^a-zA-Z]+/g, "")
    .split("")
    .reduce((obj, letter) => {
      if (!obj[letter]) {
        obj[letter] = "";
      }
      obj[letter] += "*";
      return obj;
    }, {});
  cityObj = JSON.stringify(cityObj).replace(/[{}"]/g, "");
  return cityObj;
}

console.log(getStrings("Chicago"));
console.log(getStrings("Bangkok"));
console.log(getStrings("Las Vegas"), "l:*,a:**,s:**,v:*,e:*,g:*");
*/

//5
function b(x, y, a) {
  arguments[2] = 10;
  // alert(a);
}
b(1, 2, 3); //10

//6
console.log(false == undefined); //false
console.log(false == null); //false
console.log(null == undefined); //true

//7
function maxOfCoupleNum(numbers) {
  const sorted = numbers.sort();
  const lastTwo = sorted.slice(-2);
  return lastTwo[0] * lastTwo[1];
}

// console.log(maxOfCoupleNum([1, 3, 2, 2, 3, 0]));

//7 -- Напишите функцию, которая принимает массив с разными числами, а возвращает наиболее встрещающееся число из этого массива.

function commonNum(numbers) {
  let objTotal = numbers.reduce((obj, num) => {
    if (!obj[num]) {
      obj[num] = 0;
    }
    obj[num]++;
    return obj;
  }, {});

  let max = 0;
  Object.keys(objTotal).forEach((num) => {
    if (objTotal[num] > max) {
      max = num;
    }
  });

  return max;
}

// console.log(commonNum([1, 3, 2, 2, 2, 3, 0])); //2

//8 Напишите функцию, которая принимает строку, а возвращает ее перевернутый вариант (слова в обратном порядке).

const a = "hello world";

function Reverse(a) {
  return a.split(" ").reverse().join(" ");
}

console.log(Reverse(a));

//9 Напишите функцию, которая принимает две строки: string1 и string2, а возвращает "yes", если вторая строка является анаграммой первой, и "no", если нет. Одна строка является анаграммой другой строки, если из первой можно получить вторую путём перестановки символов.

const string1 = "one";
const string2 = "two";

const one = "school master";
const two = "the classroom";

function Anagram(string1, string2) {
  return string1.split("").every((letter) => string2.split("").includes(letter))
    ? "yes"
    : "no";
}

console.log(Anagram(string1, string2));
console.log(Anagram(one, two));

//10 Напишите функцию, которая принимает массив с разными повторяющимися числами, а возвращает массив тех же чисел, но уже без повторов.

const arr = [1, 3, 2, 2, 3, 0];

function uniqNumber(numbers) {
  return numbers.filter((num, ind, arr) => arr.indexOf(num) === ind);
}

console.log(uniqNumber(arr));

// 11 Напишите функцию Zeros, которая принимает массив с разными числами, а возвращает массив с тем же порядком, но всеми нулями перемещенными в конец.

const array = [3, 0, 0, 1, 2, 0, 5, 4, 3, 3];

function Zeros(array) {
  let newArr = [];
  let zeros = [];
  for (const a of array) {
    if (a !== 0) {
      newArr.push(a);
    }
    if (a === 0) {
      zeros.push(a);
    }
  }
  return newArr.concat(zeros);
}

console.log(Zeros(array));

//12 Fibonachi -- index from 10 to 15
function fibonachi(a, b) {
  let fibon = [0, 1];

  for (let i = 2; i < b; i++) {
    fibon[i] = fibon[i - 1] + fibon[i - 2];
  }

  return fibon.slice(a, b).join(" ");
}

console.log(fibonachi(10, 15));

function fibonRecursive(n) {
  if (n <= 1) {
    return n;
  }
  return fibonRecursive(n - 1) + fibonRecursive(n - 2);
}

const fibonRow = [];

for (let i = 10; i < 15; i++) {
  const fibNum = fibonRecursive(i);
  fibonRow.push(fibNum);
}

console.log(fibonRow.join(" "));
