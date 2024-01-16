# Particularidades

1) This
2) <a href='#bind'>Bind</a>
3) <a href='#ifsatements'>If statements </a>

<h2 id='bind'>BIND</h2>

```
const obj = { value: 'hola' }

function print(){
  console.log(this.value)
}

const boundPrint = print.bind(obj);
boundPrint();
```

<h2 id='ifsatements'>If statements</h2>

Para hacer uso de if statements en una sola línea sin else, usar && y poner la expresión dentro de paréntesis

```
items.forEach(value => value>max && (max=value))
let lista = [];
items.forEach((value, key) => value==max && (lista=[...lista, key]) )
```
