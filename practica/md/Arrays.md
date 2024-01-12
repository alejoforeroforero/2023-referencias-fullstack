# Arrays (forEach, map, reduce, every, filter, includes, some, slice, splice, shift, unshift, reverse, pop, toString)

1) <a href='#a1'>Crear un array con las columnas en una matrix </a>
1) Elemento que más se repite en un arreglo, soluciones con Map y Set
1) <a href='#a3'>Encontrar matches en múltiples arrays </a>
1) Quitar tres elementos en un array desde el index 2
1) Shuffle an array
1) Recorrer un objeto con Object.keys
1) Get name of active users that are older than 43
1) revisar si en una lista de números todos son positivos




<h2 id='a1'>Crear un array con las columnas en una matrix </h2>

### Con map y la versión que más me gusta:


````
const doit = (arrs) => {
  let columns = [];

  for (let i = 0; i < arrs.length; i++) {
    let column = arrs.map((arr) => arr[i]);
    columns = [...columns, column];
  }
  return columns
};

const arrays = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(doit(arrays));
``````

### Con doble loop:
``` 
const doit = (arrs) => {
    let columns = [];
  
    for (let i = 0; i < arrs.length; i++) {
      const arr = arrs[i];
  
      for (let j = 0; j < arr.length; j++) {
        if (!columns[j]) {
          columns[j] = [];
        }
  
        columns[j] = [...columns[j], arr[j]];
      }
    }
  
    return columns;
  };
  
  const arrays = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  
  console.log(doit(arrays));
``````

<h2 id='a3'>Encontrar matches en múltiples arrays</h2>

### la mejor versión:

````
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
``````