# PRACTICA DIARIA

# DUDAS
    1. ¿Cómo convertir un Set en un array? [... new Set(array)];
    2. ¿Qué hace el método keys()?

## MÉTODOS DE UN ARRAY
    
    1. Array.map
    2. Array.sort
    3. Array.filter
    4. Array.some
    5. Array.find
    6. Array.includes
    7. Array.reduce
    

## ITERAR EN UN ARRAY
    1. new Set()    
    2. forEach loop
    3. for of loop
    4. for in loop
    

## EJERCICIOS EN ARRAY Y JSON 

    1. Shufle un Array
    2. Organizar una lista por el Key de un objeto (¿esto es necesario o ya se puede hacer con el filter?)

    1. Shufle an Array

        function randomizar(lista) {
        return lista
            .map(item => ({order:Math.random(), value:item}))
            .sort((i1, i2) => i1.order - i2.order)
            .map((nItem) => nItem.value);
        }

## EJERCICIOS CON MATH O NÚMEROS

    1. Math.abs
    2. Establecer la cantidad de decimales de un número decimal.


    Métodos de Number:
    
    Number.isFinite()
    Number.isInteger()
    Number.isNaN()
    Number.isSafeInteger()
    Number.parseFloat()
    Number.parseInt()
    Number.prototype.toExponential()
    Number.prototype.toFixed()
    Number.prototype.toLocaleString()
    Number.prototype.toPrecision()
    Number.prototype.toString()
    Number.prototype.valueOf()

# EJERCICIOS CON STRINGS

    1. Quitar el último caracter de un String
    2. Quitar el primer caracter de un String
    3. Convertir un string en array
    4. Reverse un string
    5. Existe el inject en javascript
    6. Existe el unshift
    7. ¿Cómo funciona el join?
    8. ¿Cómo funciona el call?
