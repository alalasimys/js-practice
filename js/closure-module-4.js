/** Closures */

const greet = () => {
  let counter = 0;

  function counterFn() {
    // [[env]]
    counter += 1;
    // console.log(counter);
  }
  return counterFn;
};

const incrementCounter = greet();
incrementCounter();
incrementCounter();
incrementCounter();
incrementCounter();

const count = () => {
  let total = 0;
  obj = {
    add(value) {
      total += value;
      // console.log(this);
      return this;
    },
    result() {
      return total;
    },
  };
  return obj;
};

const result = count().add(22).add(1).result();
