const fibonacci = (number) => {
  let result = 0,
    sum = 0,
    prev = 0,
    next = 1;
  for (let i = 0; i < number; i++) {
    result = prev + next;
    prev = next;
    next = result;
    if (result % 2 === 0 && result < number) {
      sum += result;
    }
  }
  return sum;
};

function even_fibonacci_numbers(number) {
  const result = fibonacci(number);
  return result;
}

console.log(even_fibonacci_numbers(100));
