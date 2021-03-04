// function getDivisorsCnt(n) {
//   let divValue = 0;
//   let divNum = [];
//   while (divValue <= n) {
//     divValue += 1;
//     if (n % divValue === 0) {
//       divNum.push(divValue);
//     }
//   }
//   return divNum.length;
// }
// console.log(getDivisorsCnt(54));

function findSum(n) {
  let arr = [];
  for (let i = 0; i <= n; i += 1) {
    arr.push(i);
  }

  return arr.reduce((acc, item) => {
    if (item % 3 === 0 || item % 5 === 0) {
      acc += item;
    }
    return acc;
  }, 0);
}
console.log(findSum(5));
