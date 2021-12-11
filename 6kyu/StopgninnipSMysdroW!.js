function spinWords(word) {
  return word
    .split(" ")
    .map((element) => {
      if (element.length >= 5) {
        return element.split("").reverse().join("");
      }
      return element;
    })
    .join(" ");
}

console.log(spinWords("Hey fellow warriors"));
