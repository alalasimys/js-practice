function outerFunction() {
  const innerCalculation = 10 + 35;
  console.log(innerCalculation, "innerCalculation");
  return innerFunction();

  function innerFunction() {
    return calcSquare(10);
  }
}

const result = outerFunction();
console.log(result, "result");

function calcSquare(x) {
  return x * x;
}
//----------------------------------
function logThis() {
  console.log(this);
}
logThis();

const objLogThis = {
  value: 100,
  logThis,
};
objLogThis.logThis();

function User() {
  console.log(this);
}
new User();
//----------------------------------
const userThis = {
  name: "Roman",
  closeApp() {
    console.log(`${this.name} has just closed app!`);
  },
};
setTimeout(userThis.closeApp, 1000); //has just closed app!
setTimeout(userThis.closeApp(), 1000); //Roman has just closed app!
