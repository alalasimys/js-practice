function calculateYears(principal, interest, tax, desired) {
  let years = 0;

  while (principal < desired) {
    principal = principal * (1 + interest) - principal * interest * tax;
    years += 1;
  }
  return years;
}
console.log(calculateYears(1000, 0.05, 0.18, 1100));
console.log(calculateYears(1000, 0.01625, 0.18, 1200));
console.log(calculateYears(1000, 0.05, 0.18, 1000));
