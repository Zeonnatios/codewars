const isPrime = (num) => {
  for (let i = 2; i < num; i++)
    if (num % i === 0) {
      return false;
    }
  return num > 1;
};

function nth_prime(num) {
  const numbers = [];
  let count = 0;
  let i = 0;
  while (count !== num) {
    if (isPrime(i)) {
      numbers.push(i);
      i++;
      count++;
    } else {
      i++;
    }
  }
  return numbers[numbers.length - 1];
}

function largest_prime_factor(number) {
  let divider = 0;
  let i = 0;
  do {
    if (isPrime(i) && number % i === 0) {
      divider = i;
    }
    i += 1;
  } while (i !== number);
  return divider;
}

//console.log(nth_prime(6));

console.log(largest_prime_factor(13195));
