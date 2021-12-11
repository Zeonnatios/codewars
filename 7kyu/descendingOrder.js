function descendingOrder(number) {
  //return parseInt(String(number).split("").sort().reverse().join(""), 10);
  const stringArrayOfNumbers = number.toString().split("");
  const orderedArray = stringArrayOfNumbers.sort().reverse().join("");
  return Number(orderedArray);
}

console.log(descendingOrder(42145));
