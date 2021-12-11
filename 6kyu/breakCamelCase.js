// complete the function
const solution = (string) => {
  const arrCamelCase = [];
  let aux = "";

  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toLowerCase()) {
      aux += string[i];
    }
    if (string[i] === string[i].toUpperCase()) {
      arrCamelCase.push(aux);
      aux = "";
      aux += string[i];
    }
    if (i === string.length - 1) {
      arrCamelCase.push(aux);
    }
  }
  return arrCamelCase.join(" ");
};

console.log(solution("camelCasing"));
