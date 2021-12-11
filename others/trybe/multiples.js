function multiples_of_3_or_5(number) {
  // Write your code here
  let sum = 0;

  for (let i = 0; i < number; i += 1) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}
