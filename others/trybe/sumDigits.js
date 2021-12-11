function digits_sum(number) {
  let count = 0;

  for (let i = 0; i <= 1000; i++) {
    if (
      i
        .toString()
        .split("")
        .reduce((curr, prev) => parseInt(curr) + parseInt(prev)) === number
    ) {
      count += 1;
    }
  }
  return count;
}

console.log(digits_sum(26));
