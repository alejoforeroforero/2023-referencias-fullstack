# 1. Core JavaScript Concepts

## - Mapping

1. Write code to get array of names from given array of users
2. Get back only active users
3. Sort users by age descending
    
## - Null and Undefined

1. What will be logged in first example and second example

        let var1;
        console.log(var1);
        console.log(typeof var1);

        let var2=null;
        console.log(var2);
        console.log(typeof var2);
        
## - Hoisting

1. var bubbles, let and const don't
      
        console.log(foo)
        foo = 1; // error
        
        console.log(foo)
        var foo = 1; // undefined
        
        foo = 4;
        console.log(foo)
        var foo = 1; // 4

## - Closures

1. Create counter function which has increment and getValue functionallity
  
        function palabraSecreta() {
          let palabra = "Hola";

          return {
            traer: () => {
              return palabra;
            },
            cambiar: (nueva) => {
              palabra = nueva;
              return palabra;
            },
          };
        }

## - Currying

  1. Write a function which helps to achive multiply(a)(b) and returns product of a and b
  
    const multiplicar = n1 => n2 => n1*n2;
    console.log(multiplicar(8)(3));

    const multiplicar2 = (a)=>{
        return (b)=>{
            return a*b;
        }
    }
    console.log(multiplicar2(5)(3));

## - Array

  1. Write a function which get's an array and an element and returns an array with this element at the end

  2. Write a function which can concatenate 2 arrays

  3. Check that user with such name exists in array of objects

  4. Removes all duplicates in an array

  5. Sort the array of numbers

  6. Sort array of objects by author's last name
  


  


        
   
    
