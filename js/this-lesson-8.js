/** Context -> this */

const user = {
  firstName: "John",
  surname: "Mackdonald",
  greet() {
    // console.log(`My name is ${this.firstName}`);
    // определяет контекст на момент вызова
  },
  showFullName() {
    // console.log(`${this.firstName} ${this.surname}`);

    const arrowFn = () => {
      console.log(this.surname, "---значение из стрелочной arrowFn");
      // заимствует контекст у родителя, определяет контекст в момент объявления (strick mode - undefinde, else - window)
      // нет arguments
      // нельзя call,apply, bind
    };

    arrowFn();
  },
};

// user.greet();
user.showFullName();
const foo = user.showFullName;
console.log(foo, "------foo");
foo();
