/**The function should return an integer, the total time required. */
function queueTime(customers, n) {
  return customers.reduce((totalTime, customer) => {
    if (n === 1) {
      return (totalTime += customer);
    } else if (n === 0) {
      return 0;
    } else if (n > customers.length) {
      return Math.max(customer);
    }
  }, 0);
}
console.log(queueTime([], 1));
console.log(queueTime([1, 2, 3, 4], 1));
console.log(queueTime([1, 2, 3, 4, 5], 100));
console.log(queueTime([2, 2, 3, 3, 4, 4], 2)); // not found solution
