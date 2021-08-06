//1 -- Сколько потоков имеет JS? -- 1

//2 -- Как создать элемент? -- document.createElement('div')

//3 -- Как работает метод bind? -- Привязывает контекст и возвращает новую функцию

//4 -- Что будет выведено в консоль? -- 10
/*
var x = 10;

function bar(funArg) {
  var x = 30;
  funArg();
}

function foo() {
  console.log(x);
}

foo.x = 20;
bar.x = 40;
console.dir(foo);
console.log((bar.x = 40));

bar(foo);
*/

//5 -- Какое значение может принимать css свойство text-transform? -- capitalize | lowercase | uppercase | none | inherit

//6 -- Какую из четырех строк необходимо дописать, чтобы получить желаемый результат? -- 4
/*
const meetups = [
  { name: "JavaScript", isActive: true, members: 100 },
  { name: "Angular", isActive: true, members: 900 },
  { name: "Node", isActive: false, members: 600 },
  { name: "React", isActive: true, members: 500 },
];

const membersOnActiveMeetups = (meetups) =>
  meetups
    .filter((meetup) => meetup.isActive)
    .reduce((sum, meetup) => sum + meetup.members, 0);

console.log(membersOnActiveMeetups(meetups)); //1500
*/
//7 -- Каким образом используя только css можно задать стили, которые применятся при наведении на элемент? -- использовать псевдокласс hover

//8 -- Какое или какие хранилища будут хранить данные даже после закрытие браузера? --  LocalStorage, CookieStorage

//9 -- Что будет в консоле после исполнения кода? -- ["10", "210", "10"]
/*
const str = "h2h40h";
const result = str
  .split("h")
  .map((s) => s + 10)
  .filter((s) => s.length < 4);
console.log(result);
*/
//10 -- Что будет в консоле после исполнения кода? -- [7, 4]
/*
const result1 = [5, 7, 9].slice(1);
result1.pop();
result1.push(4);
console.log(result1);
*/
//11 -- Что будет выведено в консоль? -- 4
/*
let obj = {
  "0": 1, //перезаписан ключ ниже
  0: 2,
};

console.log(obj);
console.log(obj["0"] + obj[0]); // =4
*/
//12 -- За что отвечает свойство overflow? --  управляет тем, как ведёт себя содержимое блочного элемента, если его размер превышает допустимую длину/ширину.

//13 -- Что произойдет при исполнении этого кода?  -- [1, 2, NaN]
/*
const map = new Map();

map.set("0", "1");
map.set("s2", "2s");
map.set("3s", "s3");

const arr = [...map.values()]; //["1", "2s", "s3"]
const result2 = arr.map((value) => parseInt(value, 10));

console.log(result2); //[1, 2, NaN]
*/
//14 --Что будет выведено в косноль? -- undefined, world
/*
var a = "hello";
function b() {
  console.log(a);
  var a = "world";
  console.log(a);
}
b();
*/
//15 -- Что будет выведено в косноль?  -- man,undefined
/*
var a1 = "hello";
function b1() {
  if (false) {
    var a1 = "world";
  } else {
    var b1 = "man";
  }
  console.log(b1); //man
  console.log(a1); //undefined
}
b1();
*/
//16 -- Что будет выведено в консоль? -- undefined, undefined
/*
var obj1 = {
  a2: () => {
    console.log(this.prop);
  },
  prop: 1,
};

obj1.a2(); //Cannot read property 'prop' of undefined
var fn = obj1.a2.bind(obj1);
fn(); //Cannot read property 'prop' of undefined
*/
//17 -- Что выведет в консоль 'abc' === new String('abc')? 2) Будет ли ответ аналогичен, если === заменить на ==? --false, нет

// console.log("abc" === new String("abc")); //false
// console.log("abc" == new String("abc")); //true

//18 -- Что такое семантическая верстка? -- Подход к написанию HTML  с учетом семантики тегов, предполагающий логичную и последовательную иерархию страницы

//19 --Чему равняется контекст в момент вызова функции через оператор new? --Пустому новому объекту

//23 --С помощью чего можно обработать любое динамически изменяемое количество аргументов функции?-- свойства arguments внутри вызванной функции

//25 --Что произойдет во время исполнения этого кода? --  В консоле увидим объект {x: 40}
const a3 = {};

function clear(obj) {
  obj.x = 40;
  obj = null;
  //return obj; - если бы был ретерн, то ссылка на объект была бы перезаписана
}

clear(a3); // undefined
// console.log(a3); //{x: 40}

//26 --Как расшифровывается HTTP? -- HyperText Transfer Protocol = Протокол передачи гипертекста

//28 -- Какие очереди задач есть в event loop? --microtasks, tasks, render

//29 --Что делает метод stopPropagation? --Прекращает дальнейшую передачу текущего события.

//30 --Что будет выведено в консоль?  --abd
/*
Promise.reject("a")
  .catch((p) => p + "b")
  .catch((p) => p + "c")
  .then((p) => p + "d")
  .finally((p) => p + "e")
  .then((p) => console.log(p));
  */

//31

for (var i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i); //10 раз 10
  });
}

for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i); //от 0 до 9
  });
}

//32 Что произойдет при исполнении этого кода? -- 40

// const obj = {
//   x: 10,
//   y: 20,
// };
// const prop = Object.keys(obj).reverse().join("");
// obj.xy = 30;
// obj.yx = 40;
// obj.x10y20 = 50;
// obj.y20x10 = 60;
// const result = obj[prop];
// console.log(result); //40

//33 --- С помощью чего можно обработать любое динамически изменяемое количество аргументов функции? --- свойства arguments внутри вызванной функции

//34 Что будет выведено в консоль?---10

// function foo() {}
// foo.x = 10;
// console.log(foo.x); //10

//35 Что будет выведено в консоль? --- promise, promise

// async function bar() {
//   return Promise.resolve(10);
// }

// async function foo() {}

// const rest1 = foo();
// const rest2 = bar();

// console.log(rest1, rest2);

//36 --- Существует ли возможность на странице, полученной с одного домена отправить запрос на другой домен? --- Да, но можно отправить только GET запрос, так как он считается безопасным
