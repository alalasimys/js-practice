//вернуть наибольшую разницу между длинной строк в массивах
function mxdiflg(a1, a2) {
  if (
    (a1.length === 0 && a2.length !== 0) ||
    (a1.length !== 0 && a2.length === 0) ||
    (a1.length === 0 && a2.length === 0)
  ) {
    return -1;
  }
  let maxValueInArr = [];
  for (let strA1 of a1) {
    for (let strA2 of a2) {
      if (strA1.length > strA2.length) {
        maxValueInArr.push(strA1.length - strA2.length);
      }
      if (strA1.length < strA2.length) {
        maxValueInArr.push(strA2.length - strA1.length);
      }
    }
  }
  return Math.max.apply(null, maxValueInArr);
}
var s1 = [
  "hoqq",
  "bbllkw",
  "oox",
  "ejjuyyy",
  "plmiis",
  "xxxzgpsssa",
  "xxwwkktt",
  "znnnnfqknaz",
  "qqquuhii",
  "dvvvwz",
];
var s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
console.log(mxdiflg(s1, s2));
