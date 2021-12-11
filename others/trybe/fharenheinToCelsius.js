function fahrenheit_to_celsius(temp_fahrenheit) {
  return ((temp_fahrenheit - 32) / 1.8).toFixed(2);
}

console.log(fahrenheit_to_celsius(95));
