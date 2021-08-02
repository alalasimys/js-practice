function isPalidrome(numberAsString) {
  const characterArr = numberAsString.split("");
  for (let i = 0; i < characterArr.length; i++) {
    const element = characterArr[i];
    if (element !== characterArr[characterArr.length - 1 - i]) {
      return false;
    }
    return true;
  }
}

console.log(isPalidrome("10100101"));
console.log(isPalidrome("123321"));
console.log(isPalidrome("545654"));

function isSumEven(string) {
  const numberArray = string.split("");
  const sum = numberArray.reduce((acc, num) => {
    return (acc += num);
  }, 0);

  return sum % 2 === 0 ? true : false;
}

console.log(isSumEven("21345"));
console.log(isSumEven("999"));
console.log(isSumEven("222"));
