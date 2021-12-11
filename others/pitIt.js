const isCharacterALetter = (character) => /[a-zA-Z]/.test(character);

const movingToEnd = (word) => {
  if (isCharacterALetter(word)) {
    return `${word.substr(1)}${word.charAt(0)}ay`;
  }
  return word;
};

const parseWords = (array) => {
  for (let i = 0; i < array.length; i++) {
    array[i] = movingToEnd(array[i]);
  }
  return array.join(" ");
};

function pigIt(str) {
  const arrWords = str.split(" ");
  const pigItWord = parseWords(arrWords);
  return pigItWord;
}

console.log(pigIt("matheus boladao"));
