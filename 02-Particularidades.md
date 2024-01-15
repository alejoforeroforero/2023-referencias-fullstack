# Particularidades

1) This
2) <a href='#bind'>Bind</a>

<h2 id='bind'>BIND</h2>

```
const obj = { value: 'hola' }

function print(){
  console.log(this.value)
}

const boundPrint = print.bind(obj);
boundPrint();
```
