// найти сколько пассажиров осталось в автобусе, первое - зашли, второе значение - вышли
// Number of people in the bus

var number = function (busStops) {
  let restPass = 0;

  for (let i = 0; i < busStops.length; i++) {
    // console.log(busStops[i]);
    let restPassPerArr = busStops[i].reduce(function (first, second) {
      return first - second;
    });
    console.log(restPassPerArr);
    restPass += restPassPerArr;
  }
  return restPass;
};

console.log(
  number([
    [10, 0],
    [3, 5],
    [5, 8],
  ])
);
