function largest_palindrome_product(digits) {
  let palindrome = 0, result = 0;
  
  for (let i = 1; i < 100; i++) {
    for (let j = 1; j < 100; j++) {
      result = i * j;
      if (
        result.toString().split("").join("") ===
        result.toString().split("").reverse().join("")
      ) {
        palindrome = result;
      }
    }
  }
  return parseInt(palindrome);
}

console.log(largest_palindrome_product(2));
