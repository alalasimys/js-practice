// console.log(1e5);

/*
const firstNumber = +prompt("Enter number", "");
const secondNumber = +prompt("Enter number", "");
alert(firstNumber + secondNumber);
*/

function randomNumber(min, max) {
  return Math.floor(min + Math.random() * (max - min));
  //Math.round(min-0.5 + Math.random() * (max - min+1))
}

// console.log(randomNumber(1, 5));

function ucFirst(str) {
  return str[0].toUpperCase() + str.slice(1);
}
// console.log(ucFirst("вася") == "Вася");

function checkSpam(str) {
  let lowerStr = str.toLowerCase();

  return lowerStr.includes("viagra") || lowerStr.includes("xxx");
}
// console.log(checkSpam("buy ViAgRA now"));
// console.log(checkSpam("free xxxxx"));
// console.log(checkSpam("innocent rabbit"));

function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.slice(0, maxlength) + "...";
  }
}
// console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
function extractCurrencyValue(str) {
  return +str.slice(1);
}
// console.log(extractCurrencyValue("$130"));

const style = ["Джаз", "Блюз"];
style.push("Рок-н-ролл");
style[Math.floor((length - 1) / 2)];
// console.log(style.shift());
style.unshift("Рэп", "Регги");
// console.log(style);

function sumInput() {
  let arr = [];
  while (true) {
    let item = prompt("Enter one more number", 0);
    if (item === null || item === "" || !isFinite(item)) {
      break;
    }
    arr.push(+item);
  }

  let sum = 0;
  for (let number of arr) {
    sum += number;
  }
  // return console.log(sum);
}

// sumInput();
function getMaxSubSum(arr) {
  let maxSum = 0;
  let patialMaxSum = 0;
  for (const item of arr) {
    patialMaxSum += item;
    maxSum = Math.max(maxSum, patialMaxSum);
    if (patialMaxSum < 0) {
      patialMaxSum = 0;
    }
  }
  return maxSum;
}

console.log(getMaxSubSum([-1, 2, 3, -9])); //= 5 (сумма выделенных)
console.log(getMaxSubSum([2, -1, 2, 3, -9])); //= 6
console.log(getMaxSubSum([-1, 2, 3, -9, 11])); //= 11
console.log(getMaxSubSum([-2, -1, 1, 2])); // = 3
console.log(getMaxSubSum([100, -9, 2, -3, 5])); // = 100
