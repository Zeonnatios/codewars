const isPrime = (num) => {
  for (let i = 2; i < num; i++)
    if (num % i === 0) {
      return false;
    }
  return num > 1;
};

function findOdd(arr) {
  return arr.find((item) => arr.filter((el) => el == item).length % 2);
}
console.log(findOdd([10]));
console.log(findOdd([10, 1, 1, 1, 1, 1, 1, 1, 1, 10, 2]));
