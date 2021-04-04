function askForMissingDetails(list) {
  return list.filter((dev) => {
    if (Object.values(dev).includes(null)) {
      let entries = Object.entries(dev);
      console.log(entries);
      for (let entry of entries) {
        const key = entry[0];
        const value = entry[1];
        if (value === null) {
          return (dev["question"] = `Hi, could you please provide your ${key}`);
        }
        // console.log(`${key}: ${value}`);
        // console.log(entry);
      }
    }
  });
}

var list1 = [
  {
    firstName: null,
    lastName: "I.",
    country: "Argentina",
    continent: "Americas",
    age: 35,
    language: "Java",
  },
  {
    firstName: "Lukas",
    lastName: "X.",
    country: "Croatia",
    continent: "Europe",
    age: 35,
    language: null,
  },
  {
    firstName: "Madison",
    lastName: "U.",
    country: "United States",
    continent: "Americas",
    age: 32,
    language: "Ruby",
  },
];

console.log(askForMissingDetails(list1));
