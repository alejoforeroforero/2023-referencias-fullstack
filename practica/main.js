const doit = (arrs) => {
  return [
    ...new Set(
      arrs.shift().filter((el) => {
        return arrs.every((arr) => {
          return arr.includes(el);
        });
      })
    ),
  ];
};

const arrays = [
  [1, 2, 3, 3],
  [4, 3, 6],
  [3, 8, 9],
];

console.log(doit(arrays));
