var moveZeros = function (arr) {
  const filtedList = arr.filter((el) => el !== 0);
  const zeroList = arr.filter((el) => el === 0);
  return filtedList.concat(zeroList);
};

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
