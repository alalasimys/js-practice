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
/*------------------------------------------------*/
// function findSum(n) {
//   let arr = [];
//   for (let i = 0; i <= n; i += 1) {
//     arr.push(i);
//   }

//   return arr.reduce((acc, item) => {
//     if (item % 3 === 0 || item % 5 === 0) {
//       acc += item;
//     }
//     return acc;
//   }, 0);
// }
// console.log(findSum(5));
/*------------------------------------------------*/
// function reverseWords(str) {
//   return str.split(" ").reverse().join(" ").split("").reverse().join("");
// }
// console.log(reverseWords("The quick brown fox jumps over the lazy dog."));
/*------------------------------------------------*/
function friend(friends) {
  return friends.reduce((acc, friend) => {
    if (friend.length === 4) {
      acc.push(friend);
    }
    return acc;
  }, []);
}
console.log(friend(["Ryan", "Kieran", "Mark"]));
