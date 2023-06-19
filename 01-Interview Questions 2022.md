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
        
   
    
