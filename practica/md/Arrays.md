# Arrays (forEach, map, reduce, every, filter, includes, some, slice, splice, shift, unshift, reverse, pop, toString)

1) <a href='#a1'>Crear un array con las columnas en una matrix </a>
1) <a href='#a3'>Encontrar matches en múltiples arrays </a>
1) <a href='#a2'>Elemento que más se repite en un arreglo, soluciones con Map y Set </a>
1) <a href='#a4'>Quitar tres elementos en un array desde el index 2</a>
1) <a href='#a5'>Shuffle an array</a>
1) <a href='#a6'>Recorrer un objeto con Object.keys, for in, Object.entries</a>
1) <a href='#a7'>Get name of active users that are older than 43</a>
1) <a href='#a8'>Revisar si en una lista de números todos son positivos </a>



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

<h2 id='a2'>Elemento que más se repite en un arreglo, soluciones con Map y Set </h2>

### Con map:
```
const doit = (arr) => {
  let mapObj = new Map();

  arr.forEach((el) => {
    if (mapObj.has(el)) {
      mapObj.set(el, mapObj.get(el) + 1);
    } else {
      mapObj.set(el, 1);
    }
  });

  let topRepetitions = 0;

  mapObj.forEach((value, key) => {
    if (value > topRepetitions) {
      topRepetitions = value;
    }
  });

  return [...mapObj].filter((el) => el[1] == topRepetitions).map((el) => el[0]);
};

const arr = [1, 2, 3, 4, 5, 4, 3, 4];

console.log(doit(arr));
```

### Con obj:
```
const doit = (arr) => {
  let obj = {}

  arr.forEach(el =>{
    if(obj[el]){
      obj[el] = obj[el] + 1
    }else{
      obj[el] = 1
    }
  })

  let topRepetitions = 0;

  Object.entries(obj).forEach(el => el[1] > topRepetitions ? topRepetitions = el[1] : null)

  return Object.entries(obj).filter(el => el[1] == topRepetitions).map(el => el[0])
};

const arr = [1, 2, 3, 4, 5, 4, 3];

console.log(doit(arr));
```

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
````

<h2 id='a4'>Quitar tres elementos en un array desde el index 2 </h2>

```
const doit = (arr) => {
  arr.splice(2, 3);
  return arr;
};

const arr = [1, 2, 3, 4, 5, 6, 7];

console.log(doit(arr));
```

<h2 id='a5'>Shuffle an array </h2>

```
const doit = (arr) => {
  return arr.map((el) => ({ pos: Math.random(), value: el }))
  .sort((el1, el2) => el1.pos - el2.pos)
  .map(obj => obj.value)
};

const arr = [1, 2, 3, 4, 5, 6, 7];

console.log(doit(arr));
```

<h2 id='a6'>Recorrer un objeto con Object.keys, for in, Object.entries </h2>

```
const doit = (obj) => {
  Object.keys(obj).forEach(key =>{
    console.log(key.slice(0, 1).toUpperCase() + key.slice(1) + ': ' + obj[key]);
  })

  for(let key in obj){
    console.log(key.slice(0, 1).toUpperCase() + key.slice(1) + ': ' + obj[key]);      
  }

  Object.entries(obj).forEach(value=>{
    console.log(value[0].slice(0, 1).toUpperCase() + value[0].slice(1) + ': ' + value[1])
  })
};

const obj = {
  name:'Alejandro',
  age:43,
  profession:'Musician'
}

doit(obj)
```

<h2 id='a7'>Get name of active users that are older than 43 </h2>

```
import { users } from "./js/variables.js";

const filter = (users) => {
  return users
    .filter((user) => user.active)
    .filter((user) => user.age > 43)
    .sort((u1, u2) => u1.name < u2.name ? -1 : 1)
    .map((user) => user.name);
};

console.log(filter(users));

```

<h2 id='a8'>Revisar si en una lista de números todos son positivos </h2>

```
const numbers = [0, 1, 2, 3, 4, -5, 8, 12];

const checkList = (arr) => {
  return arr.every((n) => n >= 0);
};

console.log(checkList(numbers));
```