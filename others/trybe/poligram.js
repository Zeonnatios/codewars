function poligrama(word) {
  const firsthalf = word.slice(0, word.length / 2);
  const secondHalf = word.slice(word.length / 2, word.length);
  const poligrama1 = firsthalf.split("").sort().join("");
  const poligrama2 = secondHalf.split("").sort().join("");
  if (poligrama1 === poligrama2) return firsthalf;
  else return "";
}

console.log(poligrama("bbabab"));
