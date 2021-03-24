// function findLongest(str) {
//   var spl = str.split(" ");
//   console.log(spl);
//   let longest;

//   for (let i = 0; i < spl.length; i++) {
//     longest = spl[0].length;
//     if (spl[i].length > longest) {
//       longest = spl[i].length;
//     }
//     // longest;
//   }
//   return longest;
// }

// console.log(findLongest("The quick white fox jumped around the massive dog"));
// --------------------------------------------------------------------------------
// var min = function (list) {
//   let minV = list[0];
//   for (let i = 0; i < list.length; i += 1) {
//     minV = minV < list[i] ? minV : (minV = list[i]);
//   }
//   return minV;
// };

// var max = function (list) {
//   let maxV = 0;
//   for (let i = 0; i < list.length; i += 1) {
//     maxV = maxV > list[i] ? maxV : (maxV = list[i]);
//   }
//   return maxV;
// };

// console.log(min([-52, 56, 30, 29, -54, 0, -110]));
// console.log(max([-52, 56, 30, 29, -54, 0, -110]));
// console.log(max([5]));
//------------------------------------------------------------------
// function stringy(size) {
//   let arrS = [];
//   for (let i = 1; i <= size; i++) {
//     arrS.push(i);
//   }
//   arrS.map((item) => {
//     if (item % 2 === 0) {
//       return arrS.splice(arrS.indexOf(item), 1, 0);
//     }
//     return arrS.splice(arrS.indexOf(item), 1, 1);
//   });
//   return arrS.join("");
// }
// console.log(stringy(20));
//------------------------------------------------------------------
function fakeBin(x) {
  return x
    .split("")
    .map((y) => {
      if (y < 5) {
        return (y = 0);
      }
      return (y = 1);
    })
    .join("");
}
console.log(fakeBin("45385593107843568"));
