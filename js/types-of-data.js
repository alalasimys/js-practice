function camelize(str) {
  return str
    .split("-") // разбивает 'my-long-word' на массив ['my', 'long', 'word']
    .map(
      // Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
      // превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
      (word, index) =>
        index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(""); // соединяет ['my', 'Long', 'Word'] в 'myLongWord'
}
// console.log(camelize("background-color")); // == 'backgroundColor';
// console.log(camelize("list-style-image")); // == 'listStyleImage';
// console.log(camelize("-webkit-transition")); // == 'WebkitTransition';
let arr = [5, 3, 8, 1];
function filterRange(arr, a, b) {
  return arr.filter((item) => item >= a && item <= b);
}
let filtered = filterRange(arr, 1, 4);
// console.log(filtered);
