//1 - Что будет выведено в консоль? -- 10
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

//2 - Что будет выведено в консоль? - foo = "bar

var foo = "foo";

function bar() {
  var foo = "bar";
  console.log(foo);
}

bar();

// 5 * index: 5
for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log("index: " + i);
  }, 1000);
}
