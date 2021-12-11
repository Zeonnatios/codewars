const sumPow = (value) => {
  let sum = 0;
  const length = value.length;
  for (let i = 0; i < length; i++) {
    sum += Math.pow(parseInt(value[i]), length);
  }
  return sum;
};

const narcissistic = (value) => {
  const sum = sumPow(value.toString());
  return sum === value;
};

console.log(narcissistic(371));
