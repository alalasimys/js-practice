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
// function fakeBin(x) {
//   return x
//     .split("")
//     .map((y) => {
//       if (y < 5) {
//         return (y = 0);
//       }
//       return (y = 1);
//     })
//     .join("");
// }
// console.log(fakeBin("45385593107843568"));
//------------------------------------------------------------------
// function twoSort(s) {
//   //return s.sort()[0].split('').join('***');-- short solution
//   let firstEl = s.sort().slice(0, 1).join(" ").split("");

//   for (let i = 0; i < firstEl.length; i++) {
//     if (i < firstEl.length - 1) {
//       firstEl[i] += "***";
//     }
//   }
//   return firstEl.join("");
// }
// console.log(
//   twoSort([
//     "bitcoin",
//     "take",
//     "over",
//     "the",
//     "world",
//     "maybe",
//     "who",
//     "knows",
//     "perhaps",
//   ])
// );
//------------------------------------------------------------------
// function isVow(a) {
//   for (let i = 0; i < a.length; i++) {
//     //a, e, i, o, u
//     if (
//       a[i] === "a".charCodeAt() ||
//       a[i] === "e".charCodeAt() ||
//       a[i] === "i".charCodeAt() ||
//       a[i] === "o".charCodeAt() ||
//       a[i] === "u".charCodeAt()
//     ) {
//       a.splice(a.indexOf(a[i]), 1, String.fromCharCode(a[i]));
//     }
//   }
//   return a;
// }
// console.log(
//   isVow([
//     118,
//     117,
//     120,
//     121,
//     117,
//     98,
//     122,
//     97,
//     120,
//     106,
//     104,
//     116,
//     113,
//     114,
//     113,
//     120,
//     106,
//   ])
// );
//------------------------------------------------------------------
// function howManyDalmatians(number) {
//   const dogs = [
//     "Hardly any",
//     "More than a handful!",
//     "Woah that's a lot of dogs!",
//     "101 DALMATIANS!!!",
//   ];

//   let respond =
//     number <= 10
//       ? dogs[0]
//       : number <= 50
//       ? dogs[1]
//       : number === 101
//       ? dogs[3]
//       : dogs[2];
//   return respond;
// }
//------------------------------------------------------------------
// function greetDevelopers(list) {
//   return list.reduce((acc, dev) => {
//     dev[
//       "greeting"
//     ] = `Hi ${dev.firstName}, what do you like the most about ${dev.language}?`;
//     return list;
//   }, []);
// }

// var list1 = [
//   {
//     firstName: "Sofia",
//     lastName: "I.",
//     country: "Argentina",
//     continent: "Americas",
//     age: 35,
//     language: "Java",
//   },
//   {
//     firstName: "Lukas",
//     lastName: "X.",
//     country: "Croatia",
//     continent: "Europe",
//     age: 35,
//     language: "Python",
//   },
//   {
//     firstName: "Madison",
//     lastName: "U.",
//     country: "United States",
//     continent: "Americas",
//     age: 32,
//     language: "Ruby",
//   },
// ];

// console.log(greetDevelopers(list1));
//------------------------------------------------------------------

/*
var obj = {
  item1: 1,
  item2: [123, "two", 3.0],
  item3: "hello",
};

var serialObj = JSON.stringify(obj); //сериализуем его
console.log(serialObj);
localStorage.setItem("myKey", serialObj); //запишем его в хранилище по ключу "myKey"

var returnObj = JSON.parse(localStorage.getItem("myKey"));
console.log(returnObj);
*/

//------------------------------------------------------------------
function digitize(n) {
  return n
    .toString()
    .split("")
    .reverse()
    .map((s) => +s);
}
// console.log(digitize(35231));
//------------------------------------------------------------------
function countBy(x, n) {
  const z = [];
  for (let i = x; z.length < n; i += x) {
    const element = i;
    z.push(element);
  }
  return z;
}
// console.log(countBy(2, 5));
// console.log(countBy(1, 10));
//------------------------------------------------------------------
function getAverage(marks) {
  //TODO : calculate the downward rounded average of the marks array
  const total = marks.reduce((total, amount) => {
    return (total += amount);
  }, 0);
  return Math.floor(total / marks.length);
}

// console.log(getAverage([2, 2, 2, 2]));
//------------------------------------------------------------------
function fizzbuzz(n) {
  const exp = [];
  for (let i = 1; exp.length < n; i++) {
    let element = i;
    if (i % 3 === 0) {
      element = "Fizz";
    }
    if (i % 5 === 0) {
      element = "Buzz";
    }
    if (i % 5 === 0 && i % 3 === 0) {
      element = "FizzBuzz";
    }
    exp.push(element);
  }
  return exp;
}
// console.log(fizzbuzz(10));
