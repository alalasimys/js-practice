import dev from "./meetup-developers.js";
var list1 = [
  {
    firstName: "Gabriel",
    lastName: "X.",
    country: "Monaco",
    continent: "Europe",
    age: 49,
    language: "PHP",
  },
  {
    firstName: "Odval",
    lastName: "F.",
    country: "Mongolia",
    continent: "Asia",
    age: 38,
    language: "Python",
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
    firstName: "Sou",
    lastName: "B.",
    country: "Japan",
    continent: "Asia",
    age: 49,
    language: "PHP",
  },
];
/* Массив с самым старшим девами с одинаковым возрастом
function findSenior(list) {
  let maxAge = list[0].age;
  for (let dev of list) {
    if (maxAge < dev.age) {
      maxAge = dev.age;
    }
    maxAge;
  }
  return list.filter((dev) => dev.age === maxAge);
}

var answer1 = [
  {
    firstName: "Gabriel",
    lastName: "X.",
    country: "Monaco",
    continent: "Europe",
    age: 49,
    language: "PHP",
  },
  {
    firstName: "Sou",
    lastName: "B.",
    country: "Japan",
    continent: "Asia",
    age: 49,
    language: "PHP",
  },
];

console.log(findSenior(list1));
*/

/*
//---Чтобы хотя бы по одному деву были из необходимой страны
function allContinents(list) {
  let countinentArr = list.map((dev) => dev.continent);
  let a = countinentArr
    .filter((el, index, arr) => arr.indexOf(el) === index)
    .filter(
      (el) => el === "Africa" || "Americas" || "Asia" || "Europe" || "Oceania"
    );
  return a.length >= 5 ? true : false;
  //short variant
  /*
    const continents = list.map(x => x.continent)
  return continents.includes('Africa' && 'Americas' && 'Asia' && 'Europe' && 'Oceania')
  
}

console.log(allContinents(list1));
console.log(
  allContinents([
    {
      firstName: "Alexander",
      lastName: "F.",
      country: "Russia",
      continent: "Europe",
      age: 89,
      language: "Java",
    },
    {
      firstName: "Fatima",
      lastName: "K.",
      country: "Saudi Arabia",
      continent: "Asia",
      age: 21,
      language: "Clojure",
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
      firstName: "Nikola",
      lastName: "H.",
      country: "Serbia",
      continent: "Europe",
      age: 29,
      language: "Python",
    },
    {
      firstName: "Jakub",
      lastName: "I.",
      country: "Slovakia",
      continent: "Asia",
      age: 28,
      language: "Java",
    },
    {
      firstName: "Kseniya",
      lastName: "T.",
      country: "Belarus",
      continent: "Americas",
      age: 89,
      language: "JavaScript",
    },
    {
      firstName: "Luka",
      lastName: "J.",
      country: "Slovenia",
      continent: "Oceania",
      age: 29,
      language: "Clojure",
    },
    {
      firstName: "Mariam",
      lastName: "B.",
      country: "Egypt",
      continent: "Africa",
      age: 89,
      language: "Python",
    },
  ])
);
*/
//Чтобы по одному деву были из категории возраста
/*
function isAgeDiverse(list) {
  let categoryAge = [];
  let ageArr = list.map((dev) => dev.age);
  for (const age of ageArr) {
    if (age >= 10 && age < 20) {
      categoryAge.push(1);
    }
    if (age >= 20 && age < 30) {
      categoryAge.push(2);
    }
    if (age >= 30 && age < 40) {
      categoryAge.push(3);
    }
    if (age >= 40 && age < 50) {
      categoryAge.push(4);
    }
    if (age >= 50 && age < 60) {
      categoryAge.push(5);
    }
    if (age >= 60 && age < 70) {
      categoryAge.push(6);
    }
    if (age >= 70 && age < 80) {
      categoryAge.push(7);
    }
    if (age >= 80 && age < 90) {
      categoryAge.push(8);
    }
    if (age >= 90 && age < 100) {
      categoryAge.push(9);
    }
    if (age >= 100 && age < 200) {
      categoryAge.push(10);
    }
  }
  console.log(categoryAge);
  const uniqAgeArr = categoryAge.filter(
    (uniq, index, arr) => arr.indexOf(uniq) === index
  );
  console.log(uniqAgeArr);
  return uniqAgeArr.length === 10 ? true : false;
}

// console.log(isAgeDiverse(list1));
console.log(isAgeDiverse(dev));
*/
//Добавить никнейм в объекты
/*
function addUsername(list) {
  let now = new Date();
  let currentYear = now.getFullYear();
  console.log(currentYear);
  console.log(now);
  for (const el of list) {
    el.username = `${el.firstName.toLowerCase()}${el.lastName
      .substring(0, el.lastName.length - 1)
      .toLowerCase()}${currentYear - el.age}`;
  }
  return list;
}
console.log(addUsername(dev));
*/
//Средний возраст
/*
function getAverageAge(list) {
  let total = list.reduce((total, currentAge) => {
    return (total += currentAge.age);
  }, 0);
  let avarage = total / list.length;
  return Math.round(avarage);
}
console.log(getAverageAge(dev));
*/
//Количество участников с языком не более в 2 раза больше чем других участников
/*
function isLanguageDiverse(list) {
  let pyton = list.filter((dev) => dev.language === "Python");
  let js = list.filter((dev) => dev.language === "JavaScript");
  console.log(js.length);
  let ruby = list.filter((dev) => dev.language === "Ruby");
  console.log(ruby.length);
  return pyton.length / js.length > 2 ||
    pyton.length / ruby.length > 2 ||
    js.length / ruby.length > 2 ||
    js.length / pyton.length > 2 ||
    ruby.length / pyton.length > 2 ||
    ruby.length / js.length > 2
    ? false
    : true;
}
console.log(isLanguageDiverse(dev));
*/
//Объект с количеством продуктов
/*
function orderFood(list) {
  // console.log(list.map((dev) => dev.meal));
  return list
    .map((dev) => dev.meal)
    .reduce((foodObj, el) => {
      return foodObj[el] ? foodObj[el]++ : (foodObj[el] = 1), foodObj;
    }, {});
  //second varian

  // var res = {};
  
  // list.forEach(function (item) {
  //   res[item.meal] = res.hasOwnProperty(item.meal) ? res[item.meal] + 1 : 1;
  // });
  
  // return res;
}
console.log(
  orderFood([
    {
      firstName: "Noah",
      lastName: "M.",
      country: "Switzerland",
      continent: "Europe",
      age: 19,
      language: "C",
      meal: "vegetarian",
    },
    {
      firstName: "Anna",
      lastName: "R.",
      country: "Liechtenstein",
      continent: "Europe",
      age: 52,
      language: "JavaScript",
      meal: "standard",
    },
    {
      firstName: "Ramona",
      lastName: "R.",
      country: "Paraguay",
      continent: "Americas",
      age: 29,
      language: "Ruby",
      meal: "vegan",
    },
    {
      firstName: "George",
      lastName: "B.",
      country: "England",
      continent: "Europe",
      age: 81,
      language: "C",
      meal: "standard",
    },
    {
      firstName: "Noel",
      lastName: "O.",
      country: "Albania",
      continent: "Europe",
      age: 23,
      language: "Python",
      meal: "gluten-intolerant",
    },
    {
      firstName: "Fatima",
      lastName: "A.",
      country: "Algeria",
      continent: "Africa",
      age: 25,
      language: "JavaScript",
      meal: "standard",
    },
    {
      firstName: "Laia",
      lastName: "P.",
      country: "Andorra",
      continent: "Europe",
      age: 55,
      language: "Ruby",
      meal: "gluten-intolerant",
    },
    {
      firstName: "Sofia",
      lastName: "I.",
      country: "Argentina",
      continent: "Americas",
      age: 35,
      language: "Java",
      meal: "diabetic",
    },
    {
      firstName: "Nareh",
      lastName: "Q.",
      country: "Armenia",
      continent: "Europe",
      age: 30,
      language: "Clojure",
      meal: "standard",
    },
    {
      firstName: "Daniel",
      lastName: "J.",
      country: "Aruba",
      continent: "Americas",
      age: 42,
      language: "JavaScript",
      meal: "standard",
    },
  ])
);
*/
