const doit = (arr) => {
  return arr.map((el) => ({ pos: Math.random(), value: el }))
  .sort((el1, el2) => el1.pos - el2.pos)
  .map(obj => obj.value)
};

const arr = [1, 2, 3, 4, 5, 6, 7];

console.log(doit(arr));
