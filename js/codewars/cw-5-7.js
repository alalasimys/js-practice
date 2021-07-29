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
/*
function friend(friends) {
  return friends.reduce((acc, friend) => {
    if (friend.length === 4) {
      acc.push(friend);
    }
    return acc;
  }, []);
}
console.log(friend(["Ryan", "Kieran", "Mark"]));
*/
/*------------------------------------------------*/
function broken(str) {
  let strArr = str.split("");
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === "1") {
      strArr.splice(strArr.indexOf(strArr[i]), 1, 0);
    }
    if (strArr[i] === "0") {
      strArr.splice(strArr.indexOf(strArr[i]), 1, 1);
    }
  }
  return strArr.join("");
  //return str.split('').map(a => a == "0" ? "1" : "0").join('');
}
//console.log(broken("10000000101101111110011001000"));
//
/*
function outed(meet, boss) {
  let average = 0;
  let total = 0;
  for (const key in meet) {
    total += meet[key];
  }
  total += meet[boss];
  average = total / Object.keys(meet).length;
  return average <= 5 ? "Get Out Now!" : "Nice Work Champ!";
}
console.log(
  outed(
    {
      tim: 0,
      jim: 2,
      randy: 0,
      sandy: 7,
      andy: 0,
      katie: 5,
      laura: 1,
      saajid: 2,
      alex: 3,
      john: 2,
      mr: 0,
    },
    "laura"
  )
);
*/
//
/*
function NBAplayer(name, team, ppg) {
  this.name = name;
  this.team = team;
  this.ppg = ppg;
}

var iverson = new NBAplayer("Iverson", "76ers", 11.2);
console.log(typeof iverson);
var jordan = new NBAplayer("Jordan", "bulls", 20.2);

function sumPPG(playerOne, playerTwo) {
  return playerOne.ppg + playerTwo.ppg;
}

console.log(sumPPG(iverson, jordan));
*/
//
class Song {
  listeners = [];

  constructor(title, artist) {
    this.title = title;
    this.artist = artist;
  }

  howMany(people) {
    if (this.listeners.length === 0) {
      this.listeners = people;

      return people.length;
    }

    const newListeners = [];

    people.forEach((item) => {
      const exist = this.listeners.find(
        (l) => l.trim().toLowerCase() === item.trim().toLowerCase()
      );

      if (!exist) {
        newListeners.push(item);
        this.listeners.push(item);
      }
    });

    return newListeners.length;
  }
}

let mountMoose = new Song("Mount Moose", "The Snazzy Moose");

console.log(
  mountMoose.howMany(["JOHN", "FRED", "BOB", "CARL", "RYAN", "KATE"])
);
console.log(mountMoose.howMany(["Jack", "jacK"]));
