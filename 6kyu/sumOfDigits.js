function digital_root(number) {
  let sum = number;

  while (sum >= 10) {
    let aux = String(sum)
      .split("")
      .map((n) => Number(n));
    sum = aux.reduce((acc, curr) => acc + curr);
  }
  return sum;
}

console.log(digital_root(942));
