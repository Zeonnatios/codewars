const countDirection = (direction, arr) => {
  return arr.filter((word) => word === direction).length;
};

const findDirections = (arr) => {
  return {
    NORTH: countDirection("NORTH", arr),
    SOUTH: countDirection("SOUTH", arr),
    EAST: countDirection("EAST", arr),
    WEST: countDirection("WEST", arr),
  };
};

const dirReduc = (arr) => {
  const dir = findDirections(arr);
  const resume = resumeDirections(dir);
};

console.log(
  dirReduc([
    "NORTH",
    "SOUTH",
    "SOUTH",
    "EAST",
    "WEST",
    "NORTH",
    "WEST",
    "NORTH",
  ])
);

//incomplete