function count_down(x) {
  let countdown = "";
  for (let i = x; i >= 0; i--) {
    if (i === 0) return (countdown += `${i}!!!`);
    countdown += `${i}...`;
  }
  return countdown;
}

console.log(count_down(10));
