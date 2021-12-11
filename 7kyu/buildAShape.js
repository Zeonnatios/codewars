function generateShape(integer) {
  let result = "";
  for (let i = 1; i <= integer; i++) {
    for (let j = 0; j < integer; j++) {
      result += "+";
    }
    if (i !== integer) result += "\n";
  }

  return result;
}

console.log(generateShape(3));
