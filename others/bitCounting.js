function convertToBinary(number, bin) {
  if (number > 0) {
    return convertToBinary(parseInt(number / 2)) + (number % 2);
  }
  return "";
}

function sumBinary(binary) {
  let count = 0;
  for (let i = 0; i < binary.length; i++) {
    if (parseInt(binary.charAt(i)) === 1) {
      count += 1;
    }
  }
  return count;
}

const countBits = function (n) {
  if (n < 0) return 0;
  const binary = convertToBinary(n);
  const count = sumBinary(binary);
  return count;
};

console.log(countBits(8));