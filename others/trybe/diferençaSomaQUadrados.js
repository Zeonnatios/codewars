const sum = (num) => {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    sum += i;
  }
  return sum ** 2;
};

const sumPower = (num) => {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    sum += i ** 2;
  }
  return sum;
};

function sum_square_difference(n) {
  return sum(n) - sumPower(n);
}
