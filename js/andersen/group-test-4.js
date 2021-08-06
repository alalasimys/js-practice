//1
/*
console.log("111"); //1
setTimeout(() => {
  console.log("222");//3
  setTimeout(() => {
    console.log("333");//5
  }, 0);
}, 0);

setTimeout(() => {
  console.log("444");//4
});

console.log("555");//2
*/
//2
/*
const getPost = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await response.json();
  console.log("async", data);
};

console.log("111"); //1

setTimeout(() => console.log("timeout with time"), 0); //5

setTimeout(() => console.log("timeout without time")); //6 - тот же setTimeout с 0

getPost();

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((data) => console.log("fetch", data));

Promise.resolve("333").then((val) => console.log(val)); //3

console.log("444"); //2

Promise.resolve("555").then((val) => console.log(val)); //4
*/
//3
/*
const prom = Promise.resolve(10);
// prom.reject(20); // ошибка
*/
//4
/*
const prom = new Promise((resolve, reject) => {
  resolve(10);
  reject(20);
});

prom
  .then((value) => console.log("then", value)) //then 10
  .catch((value) => console.log("catch", value));
*/
//5
/*
Promise.resolve("foo") // foo
  .then(Promise.resolve("bar")) // значение не передается
  .then((result) => console.log(result));
*/
//6
/*
const p1 = new Promise((res) =>
  setTimeout(() => {
    res(30);
  }, 3000)
);

const p2 = new Promise((res) =>
  setTimeout(() => {
    res(10);
  }, 1000)
);

const propAll = Promise.all([p1, p2]);

propAll
  .then((val) => console.log("then", val)) //[30, 10]
  .catch((val) => console.log("catch", val));
*/
//7
/*
const doSomething = () =>
  new Promise((res) =>
    setTimeout(() => {
      res(10);
    }, 1000)
  );

const doSomethingElse = () =>
  new Promise((res) =>
    setTimeout(() => {
      res(20);
    }, 2000)
  );

const finalHandler = (value) => {
  console.log(value);
};

doSomething()
  .then((value) => {
    console.log(value);
    doSomethingElse();
  })
  .then(finalHandler); // return 10 and undefined
*/
//8
/*
setTimeout(() => {
  console.log("setTimeout");
}, 0);

async function foo() {
  console.log("some");
  let data = await Promise.resolve(10);
  console.log(data);
}

foo();

console.log(20);
*/
//9
/*
async function foo() {}
console.log(foo()); //Promise {<fulfilled>: undefined}
*/
//10

const id = await fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((item) => item.id);

const ida = fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((item) => item.id);
console.log("await", id); // Promise {<pending>}

//11 -- log, p1, p2, st2, st1
/*
setTimeout(() => {
  console.log("st1");
}, 1000);

Promise.resolve()
  .then(() => console.log("p1"))
  .then(() => console.log("p2"))
  .catch(() => console.log("catch"));

setTimeout(() => {
  console.log("st2");
}, 0);

console.log("log");
*/

//12
function doSomethingElse() {
  return "doSomethingElse";
}

function doSomething() {
  return Promise.resolve("doSomething");
}

doSomething()
  .then(function () {
    return doSomethingElse();
  })
  .then((res) => console.log("1", res)); //doSomethingElse

doSomething()
  .then(function () {
    doSomethingElse();
  })
  .then((res) => console.log("2", res)); //undefined

doSomething()
  .then(doSomethingElse())
  .then((res) => console.log("3", res)); //doSomething

doSomething()
  .then(doSomethingElse)
  .then((res) => console.log("4", res)); //doSomethingElse
