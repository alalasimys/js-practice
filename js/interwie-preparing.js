// "" + 1 + 0 = "10";
// "" - 1 + 0 = -1;
// true + false = 1;
// 6 / "3" = 2;
// "2" * "3" = 6;
// 4 + 5 + "px" = "9px";
// "$" + 4 + 5 = "$45";
// "4" - 2 = 2;
// "4px" - 2 = NaN;
// 7 / 0 = Infinity;
// "  -9  " + 5 = " -9 5";
// "  -9  " - 5 = -14;
// null + 1 = 1;
// undefined + 1 = NaN;
// " \t \n" - 2 = -2;

// const question = prompt("Какое «официальное» название JavaScript?", "");
// if (question === "ECMAScript") {
//   alert("Верно");
// } else {
//   alert("Не знаете? ECMAScript");
// }

const sum = (a = 0) => {
  return (b) => {
    if (!b && typeof b !== "number") return a;
    return sum(a + b);
  };
};

console.log(sum(1)(2)(3)(10)()); //16
