function findOddNames(list) {
  let arrWithTotalChar = [];
  // let oddDev = [];
  let firstNameArr = list.map((dev) => dev.firstName);

  let numberArr = firstNameArr.map((name) => {
    // console.log(name.split(""));
    let newNameArr = name.split("");

    let arrWithChar = newNameArr.reduce((arr, word) => {
      // console.log(word.charCodeAt())
      arr.push(word.charCodeAt());
      return arr;
    }, []);

    return arrWithChar;
  });
  numberArr.forEach((current) => {
    let totalChar = current.reduce((total, elem) => (total += elem), 0);
    arrWithTotalChar.push(totalChar);
  });

  const oddDev = [];
  arrWithTotalChar.forEach((item, key) => {
    if (item % 2 !== 0) {
      oddDev.push(list[key]);
    }
  });
  return oddDev;
}

//second varian with callback
/*
function sumCharCodes(str){
  return str
    .split('')
    .map(char => char.charCodeAt())
    .reduce((sum, current) => sum + current);
}

function isOdd(n){
  return n % 2 != 0;
}

function findOddNames(list) {
  return list.filter(person => {
    return isOdd(sumCharCodes(person.firstName));
  })
}
*/

var list1 = [
  {
    firstName: "Aba",
    lastName: "N.",
    country: "Ghana",
    continent: "Africa",
    age: 21,
    language: "Python",
  },
  {
    firstName: "Abb",
    lastName: "O.",
    country: "Israel",
    continent: "Asia",
    age: 39,
    language: "Java",
  },
];
// console.log(findOddNames(list1));
console.log(
  findOddNames([
    {
      firstName: "Emily",
      lastName: "N.",
      country: "Ireland",
      continent: "Europe",
      age: 38,
      language: "Ruby",
    },
    {
      firstName: "Mark",
      lastName: "G.",
      country: "Scotland",
      continent: "Europe",
      age: 22,
      language: "JavaScript",
    },
    {
      firstName: "Lukas",
      lastName: "R.",
      country: "Austria",
      continent: "Europe",
      age: 89,
      language: "C",
    },
    {
      firstName: "Oliver",
      lastName: "P.",
      country: "Wales",
      continent: "Europe",
      age: 29,
      language: "JavaScript",
    },
    {
      firstName: "Hugo",
      lastName: "K.",
      country: "Spain",
      continent: "Europe",
      age: 39,
      language: "Python",
    },
    {
      firstName: "Seoyeon",
      lastName: "J.",
      country: "South Korea",
      continent: "Asia",
      age: 29,
      language: "Ruby",
    },
    {
      firstName: "Malik",
      lastName: "J.",
      country: "Greenland",
      continent: "Europe",
      age: 19,
      language: "Python",
    },
    {
      firstName: "Laia",
      lastName: "P.",
      country: "Andorra",
      continent: "Europe",
      age: 55,
      language: "Ruby",
    },
    {
      firstName: "Sofia",
      lastName: "A.",
      country: "Denmark",
      continent: "Europe",
      age: 19,
      language: "Python",
    },
    {
      firstName: "Fatemeh",
      lastName: "Z.",
      country: "Iran",
      continent: "Asia",
      age: 29,
      language: "Java",
    },
    {
      firstName: "Ximena",
      lastName: "Q.",
      country: "Mexico",
      continent: "Americas",
      age: 28,
      language: "Java",
    },
    {
      firstName: "Krishna",
      lastName: "G.",
      country: "Nepal",
      continent: "Asia",
      age: 22,
      language: "Java",
    },
    {
      firstName: "Louise",
      lastName: "F.",
      country: "France",
      continent: "Europe",
      age: 22,
      language: "Java",
    },
    {
      firstName: "Emilija",
      lastName: "S.",
      country: "Lithuania",
      continent: "Europe",
      age: 19,
      language: "Python",
    },
    {
      firstName: "Piotr",
      lastName: "B.",
      country: "Poland",
      continent: "Europe",
      age: 128,
      language: "JavaScript",
    },
    {
      firstName: "Noa",
      lastName: "A.",
      country: "Israel",
      continent: "Asia",
      age: 40,
      language: "Ruby",
    },
    {
      firstName: "Kseniya",
      lastName: "T.",
      country: "Belarus",
      continent: "Europe",
      age: 29,
      language: "JavaScript",
    },
    {
      firstName: "Jakub",
      lastName: "I.",
      country: "Slovakia",
      continent: "Europe",
      age: 28,
      language: "Java",
    },
    {
      firstName: "Joshua",
      lastName: "O.",
      country: "Isle of Man",
      continent: "Europe",
      age: 39,
      language: "Clojure",
    },
    {
      firstName: "Mehdi",
      lastName: "H.",
      country: "Tunisia",
      continent: "Africa",
      age: 42,
      language: "Python",
    },
  ])
);
//
/*
  Expected: [{ firstName: 'Laia',
  lastName: 'P.',
  country: 'Andorra',
  continent: 'Europe',
  age: 55,
  language: 'Ruby' }, { firstName: 'Daniel',
  lastName: 'J.',
  country: 'Aruba',
  continent: 'Americas',
  age: 42,
  language: 'JavaScript' }, { firstName: 'Althea',
  lastName: 'I.',
  country: 'Philippines',
  continent: 'Asia',
  age: 31,
  language: 'Python' }, { firstName: 'Luke',
  lastName: 'V.',
  country: 'Malta',
  continent: 'Europe',
  age: 29,
  language: 'PHP' }, { firstName: 'Oliver',
  lastName: 'Q.',
  country: 'Australia',
  continent: 'Oceania',
  age: 19,
  language: 'PHP' }, { firstName: 'Sou',
  lastName: 'B.',
  country: 'Japan',
  continent: 'Asia',
  age: 43,
  language: 'PHP' }, { firstName: 'Mia',
  lastName: 'H.',
  country: 'Germany',
  continent: 'Europe',
  age: 39,
  language: 'Ruby' }, { firstName: 'Oliver',
  lastName: 'P.',
  country: 'Wales',
  continent: 'Europe',
  age: 29,
  language: 'JavaScript' }], instead got: [{ firstName: 'Laia',
  lastName: 'P.',
  country: 'Andorra',
  continent: 'Europe',
  age: 55,
  language: 'Ruby' }, { firstName: 'Daniel',
  lastName: 'J.',
  country: 'Aruba',
  continent: 'Americas',
  age: 42,
  language: 'JavaScript' }, { firstName: 'Althea',
  lastName: 'I.',
  country: 'Philippines',
  continent: 'Asia',
  age: 31,
  language: 'Python' }, { firstName: 'Luke',
  lastName: 'V.',
  country: 'Malta',
  continent: 'Europe',
  age: 29,
  language: 'PHP' }, { firstName: 'Oliver',
  lastName: 'Q.',
  country: 'Australia',
  continent: 'Oceania',
  age: 19,
  language: 'PHP' }, { firstName: 'Sou',
  lastName: 'B.',
  country: 'Japan',
  continent: 'Asia',
  age: 43,
  language: 'PHP' }, { firstName: 'Mia',
  lastName: 'H.',
  country: 'Germany',
  continent: 'Europe',
  age: 39,
  language: 'Ruby' }]
  */
