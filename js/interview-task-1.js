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
