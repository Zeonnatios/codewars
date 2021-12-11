const clockwise = (matrix) => {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      console.log(matrix[i][matrix.length -1]);
    }
  }
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
