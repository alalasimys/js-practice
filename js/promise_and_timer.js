console.log("First");
setTimeout(() => {
  console.log("Second");
}, 2000);
console.log("Third");

const btn = document.querySelector("#js-button");
const onClick = () => setTimeout(() => alert("I love async JS!"));
btn.addEventListener("click", onClick);
// clearInterval(onClick);

const btnStart = document.querySelector(".js-start");
const btnStop = document.querySelector(".js-stop");
let timeId = null;

btnStart.addEventListener("click", () => {
  timeId = setInterval(() => {
    console.log(`I love async JS! ${Date.now()}`);
  }, 1000);
});

btnStop.addEventListener("click", () => {
  clearInterval(timeId);
  console.log("setInterval stopped");
});

let date = new Date();

// формат вывода
const options = {
  weekday: "short",
  year: "2-digit",
  month: "short",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
};

// Украина
const localeUk = date.toLocaleString("Uk-uk", options);
console.log(localeUk); // понеділок, 19 бер. 2018 р., 17:42

// USA
const localeUs = date.toLocaleString("en-US", options);
console.log(localeUs); // Monday, Mar 19, 2018, 5:43 PM

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success!");
  }, 2000);
  // reject("Error passed into reject function :(");
});

console.log("BEFORE promise.then");

const onResolve = (data) => {
  console.log("INSIDE promise.then - onResolve");
  console.log(data);
};

const onReject = (error) => {
  console.log("INSIDE promise.then - onReject");
  console.log(error);
};

promise.then(onResolve, onReject);

console.log("AFTER promise.then");

const promiseWithError = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("That is error!");
  }, 2000);
});

promiseWithError
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Finished!");
  });

const promiseChain = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(5);
  }, 2000);
});

promiseChain
  .then((value) => {
    console.log(value); // 5
    return value * 2;
  })
  .then((value) => {
    console.log(value); // 10
    return value * 3;
  })
  .then((value) => {
    console.log(value); // 30
  })
  .catch((error) => {
    console.log(error);
  });

const makePromise = (text, delay) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(text), delay);
  });
};

const promiseA = makePromise("promiseA", 1000);
const promiseB = makePromise("promiseB", 3000);

/*
 * Выполнится спустя 3 секунды, когда выполнится второй промис с задержкой в 3c.
 * Первый выполнится через секунду и просто будет готов
 */
Promise.all([promiseA, promiseB])
  .then((result) => console.log(result)) //["promiseA", "promiseB"]
  .catch((err) => console.log(err));

Promise.race([promiseA, promiseB])
  .then((result) => console.log(result)) // "promiseA"
  .catch((err) => console.log(err));

const getMessage = function () {
  const input = prompt("Введите сообщение");

  return Promise.resolve(input);
};

const logger = (message) => console.log(message);

getMessage().then((message) => logger(message));

// Или еще короче
getMessage().then(logger);
