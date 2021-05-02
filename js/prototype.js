/*
function Rabbit() {}

Rabbit.prototype = {
  eats: true,
};

let rabbit = new Rabbit();

// alert(rabbit.eats); // true

Rabbit.prototype = {};

let arr = [1, 2, 3];
// console.log(arr);

let dictionary = Object.create(null);

// ваш код, который добавляет метод dictionary.toString
let dictionary = Object.create(null, {
  toString: {
    // определяем свойство toString
    value() {
      // значение -- это функция
      return Object.keys(this).join();
    },
  },
});
// добавляем немного данных
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ

// только apple и __proto__ выведены в цикле
for (let key in dictionary) {
  alert(key); // "apple", затем "__proto__"
}

// ваш метод toString в действии
alert(dictionary); // "apple,__proto__"
*/
