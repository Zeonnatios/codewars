const clockwise = (matrix) => {
  const newMatrix = Array(3).fill(Array(3));
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      newMatrix[i][j] = matrix[i][j];
      console.log("i", newMatrix);
    }
  }
  return newMatrix;
};

function rotate(matrix, direction) {
  if ((direction = "counter-clockwise")) {
  }
  if ((direction = "clockwise")) {
  }
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(clockwise(matrix, "clockwise"));
