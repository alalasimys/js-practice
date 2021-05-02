//1 - sayHi is not a function
/*
sayHi("Hi");

var sayHi = function (name) {
  console.log("Hello" + name);
};
*/

//2
// var a = ["one", "tow"];
// console.log(a.join());
/*
var a = 1;
a > 0 ? ((a += 1), a++) : a;
console.log(a);
*/
//3
function showMessage(from, text) {
  // аргументы: from, text
  console.log(from + ": " + text);
}

showMessage("Аня", "Привет!", "22"); // Аня: Привет! (*)
