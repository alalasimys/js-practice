// console.log(typeof null); //object

var str1 = new String(null); //String{"null"}
var s = "text";
var str2 = new String(0); //String{""}
var str3 = new String("0"); //String{"0"}
var str4 = new String(""); //String{""}--правильный
var str5 = new String();
console.log(!!str1.valueOf()); //String{"null"}
console.log(!!s.valueOf()); // "text"
console.log(!!str2.valueOf()); //String{}
console.log(!!str3.valueOf()); //String{"0"}
console.log(!!str4.valueOf()); //String{""}
console.log(!!str5.valueOf()); //String{}

function bar() {
  // console.log(foo);
  return foo;
  foo = 10;
  function foo() {}
  var foo = 11;
}

alert(typeof bar()); // !! function потому что foo это ссылка (function foo())

// var a1 = "wrong";
// function a() {
//   this.a1 = "right";
//   return "1st";
// }
// function a(val) {
//   return "2nd";
// }
// alert(new a().a1); //Uncaught SyntaxError: Identifier 'a' has already been declared

function foo(a) {
  arguments[0] = 2;
  alert(a);
}
foo(1);

var arr = [];
arr[0] = "a";
arr[1] = "b";
arr[10] = "c";
arr.foo = "d";
alert(arr.length); //11

console.log({}.toString()); //[object Object]

var result = "ten" * 2;
console.log(result); //Nan !== NaN

console.log("hello");
