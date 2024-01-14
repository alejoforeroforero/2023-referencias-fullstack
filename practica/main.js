const numbers = [0, 1, 2, 3, 4, -5, 8, 12];

const checkList = (arr) => {
  return arr.every((n) => n >= 0);
};

console.log(checkList(numbers));
