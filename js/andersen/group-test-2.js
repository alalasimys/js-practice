//1
function foo(x, y, ...rest) {
  console.log(rest); //[3, 4, 5]
}
foo(1, 2, 3, 4, 5);

//2
function logObj(obj) {
  console.log(obj); // {name = "Max"}
}

function setName({ user }) {
  user.name = "Max";
}

const user = {};
logObj.user = user;

setName(logObj);
logObj(user);

const obj = {};
const obj2 = Object.assign(obj, { x: 20 });
obj2.t = 4;
console.log(obj2 === obj);
const obj3 = Object.assign({ y: 10 }, obj, { z: 30 });

obj.h = 40;
// console.log(obj3);

//3
const objj = {};
const x = { x: 10 };
const y = { y: 20 };
objj[x] = 10;
objj[y] = 20;
console.log(objj); //{[object Object]: 20}

const obj7 = {};
obj7.a = 10;
let numObj = +obj7;
console.log(numObj); //NaN

//4
const obj8 = {
  foo: function () {},
  x: 10,
  str: "some",
  bool: true,
  obj: {},
};
const str = JSON.stringify(obj8);
console.log(str); //{"x":10,"str":"some","bool":true,"obj":{}}
/* JSON пропускает:
Свойства-функции (методы).
Символьные свойства.
Свойства, содержащие undefined. 
*/
const pet = new String("dog"); //String {"dog"}
const petStr = String("dog"); //dog
