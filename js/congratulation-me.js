function getCarouselOfCongratulations() {
  let name = prompt("Enter the name of the birthday person!");
  if (name === String.fromCharCode(65, 108, 108, 97)) {
    return alert(`${name} Happy Birthday to You! We wish our, future developer,
     many interesting ideas and ways to implement everything that was conceived.
      Sharp eyesight and sharp mind. Error-free codes, easy tasks and interest in what you love.
       Happiness, health, love and prosperity! ;-)`);
  }
  return alert(
    `Try again! Use Latin letters and remember that you are addressing the person with respect!`
  );
}
console.log(getCarouselOfCongratulations());
// console.log(String.fromCharCode(65, 108, 108, 97));
//from Sergey Proskurnin
