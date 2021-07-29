//1
function foo(x) {
  console.log(x); //undefined
}

const z = foo();

console.log(z); //undefined

//2
var q = 10;
function woo() {
  console.log(q); //undefined
  return 20;
  var q = 30;
}
woo();

//3

let w = 10;
let e = w;
w = 20;
// console.log(w); //20
// console.log(e); //10

//4

let obj1 = {};
let obj2 = obj1;
obj1.x = 10;
obj2.y = 20;
// console.log(obj1); // {x:10,y:20}
// console.log(obj2); // {x:10,y:20}

//5
const obj3 = {
  u: 20,
};

const obj4 = {
  c: obj3,
};

let obj5 = Object.assign({}, obj4);

// console.log(obj5.x === obj4.x); //true
//6
const r = 10;
if (true) {
  var o = 20;
  const p = 30;
}

// console.log(r, o, p); //-- p is not defined
