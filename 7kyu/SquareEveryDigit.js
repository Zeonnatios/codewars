function squareDigits(num) {
  return parseInt(
    num
      .toString()
      .split("")
      .map((number) => number ** 2, 10)
      .join(""),
    10
  );
}

console.log(squareDigits(3212));
