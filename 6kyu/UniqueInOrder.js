// const uniqueInOrder = (iterable) => {
//   const ordered = [];

//   for (let i = 0; i < iterable.length; i++) {
//     if (iterable[i - 1] === undefined || iterable[i] !== iterable[i - 1]) {
//       ordered.push(iterable[i]);
//     }
//   }
//   return ordered;
// };
const uniqueInOrder = (iterable) => {
  return [...iterable].filter((a, i) => a !== iterable[i - 1]);
};

console.log(uniqueInOrder([1, 2, 2, 3, 3]));
console.log(uniqueInOrder('AAAABBBBCcDDabc'));
