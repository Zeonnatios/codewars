/*
  function getCount(str) {
    return str.replace(/[^aeiou]/gi, '').length;
  }
*/

function getCount(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}

console.log(getCount("phx"));
console.log(getCount("araara"));
