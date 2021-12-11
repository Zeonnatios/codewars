const verifyCharacter = (word, character) => {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === character) count += 1;
  }
  return count > 1 ? true : false;
};

function duplicateEncode(word) {
  let output = "";
  for (let i = 0; i < word.length; i++) {
    if (verifyCharacter(word.toLowerCase(), word[i].toLowerCase())) {
      output += ")";
    } else {
      output += "(";
    }
  }
  return output;
}

console.log(duplicateEncode("recebe"));
