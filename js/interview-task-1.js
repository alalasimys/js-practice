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

console.log(
  fruits.reduce((obj, fruit) => {
    if (!obj[fruit]) {
      obj[fruit] = 0;
    }

    obj[fruit] += 1;
    return obj;
  }, {})
);
