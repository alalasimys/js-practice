function sayHello() {
  const say = function () {
    console.log(hello);
  };
  const hello = "Hello, world!";
  return say;
}
const sayHelloClosure = sayHello();
sayHelloClosure();
