// function calculateYears(principal, interest, tax, desired) {
//   let years = 0;

//   while (principal < desired) {
//     principal = principal * (1 + interest) - principal * interest * tax;
//     years += 1;
//   }
//   return years;
// }
// console.log(calculateYears(1000, 0.05, 0.18, 1100));
// console.log(calculateYears(1000, 0.01625, 0.18, 1200));
// console.log(calculateYears(1000, 0.05, 0.18, 1000));
//---------------------------------------------
/*function countLanguages(list) {
  return list
    .map((dev) => dev.language)
    .reduce((acc, lang) => {
      if (!acc.hasOwnProperty(lang)) {
        acc[lang] = 0;
      }
      acc[lang] += 1;
      return acc;
    }, {});
}

const list1 = [
  {
    firstName: "Noah",
    lastName: "M.",
    country: "Switzerland",
    continent: "Europe",
    age: 19,
    language: "C",
  },
  {
    firstName: "Anna",
    lastName: "R.",
    country: "Liechtenstein",
    continent: "Europe",
    age: 52,
    language: "JavaScript",
  },
  {
    firstName: "Ramon",
    lastName: "R.",
    country: "Paraguay",
    continent: "Americas",
    age: 29,
    language: "Ruby",
  },
  {
    firstName: "George",
    lastName: "B.",
    country: "England",
    continent: "Europe",
    age: 81,
    language: "C",
  },
];

//var answer = { C: 2, JavaScript: 1, Ruby: 1 };
console.log(countLanguages(list1)); */
//---------------------------------------------
/* const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

const getTags = (tweets) =>
  tweets.reduce((allTags, tweet) => {
    allTags.push(...tweet.tags);

    return allTags;
  }, []);

const tags = getTags(tweets);

// Вынесем callback-функцию отдельно, а в reducе передадим ссылку на нее.
// Это стандартная практика если callback-функция довольно большая.

// Если в объекте-аккумуляторе acc нету своего свойства с ключем tag,
// то создаем его и записывает ему значение 0.
// В противном случае увеличиваем значение на 1.
const getTagStats = (acc, tag) => {
  if (!acc.hasOwnProperty(tag)) {
    acc[tag] = 0;
  }

  acc[tag] += 1;

  return acc;
};

// Начальное значение аккумулятора это пустой объект {}
const countTags = (tags) => tags.reduce(getTagStats, {});

const tagCount = countTags(tags);
console.log(tagCount); */
//---------------------------------------------
function isSameLanguage(list) {
  list.every((val) => val.language === list[0].language);
  //new Set(list.map(cur => cur.language)).size === 1;
}

var list2 = [
  {
    firstName: "Mariami",
    lastName: "G.",
    country: "Georgia",
    continent: "Europe",
    age: 29,
    language: "Python",
  },
  {
    firstName: "Mia",
    lastName: "H.",
    country: "Germany",
    continent: "Europe",
    age: 39,
    language: "Ruby",
  },
  {
    firstName: "Maria",
    lastName: "I.",
    country: "Greece",
    continent: "Europe",
    age: 32,
    language: "C",
  },
];
console.log(
  isSameLanguage([
    {
      firstName: "Joshua",
      lastName: "O.",
      country: "Isle of Man",
      continent: "Europe",
      age: 39,
      language: "Java",
    },
    {
      firstName: "Sofia",
      lastName: "P.",
      country: "Italy",
      continent: "Europe",
      age: 41,
      language: "C",
    },
    {
      firstName: "Ellen",
      lastName: "E.",
      country: "Finland",
      continent: "Europe",
      age: 55,
      language: "Java",
    },
  ])
);

console.log(
  isSameLanguage([
    {
      firstName: "Mark",
      lastName: "G.",
      country: "Scotland",
      continent: "Europe",
      age: 22,
      language: "JavaScript",
    },
    {
      firstName: "Victoria",
      lastName: "T.",
      country: "Puerto Rico",
      continent: "Americas",
      age: 30,
      language: "Clojure",
    },
    {
      firstName: "Emma",
      lastName: "B.",
      country: "Norway",
      continent: "Europe",
      age: 19,
      language: "Clojure",
    },
  ])
);
