# 1. Core JavaScript Concepts

## 3-Mapping

1. Write code to get array of names from given array of users
2. Get back only active users
3. Sort users by age descending
    
## 4-Null and Undefined

1. What will be logged in first example and second example

        let var1;
        console.log(var1);
        console.log(typeof var1);

        let var2=null;
        console.log(var2);
        console.log(typeof var2);
        
## 5-Hoisting

1. var bubbles, let and const don't
      
        console.log(foo)
        foo = 1; // error
        
        console.log(foo)
        var foo = 1; // undefined
        
        foo = 4;
        console.log(foo)
        var foo = 1; // 4

## 6-Closures

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

## 7-Currying

  1. Write a function which helps to achive multiply(a)(b) and returns product of a and b
  
    const multiplicar = n1 => n2 => n1*n2;
    console.log(multiplicar(8)(3));

    const multiplicar2 = (a)=>{
        return (b)=>{
            return a*b;
        }
    }
    console.log(multiplicar2(5)(3));

## 8-Adding elements to an Array

  1. Write a function which get's an array and an element and returns an array with this element at the end


    const append = (arr, el){
      return = [...arr, el];
    }


## 9-Concatenating arrays

  1. Write a function which can concatenate 2 arrays

          const mezclarListas = (l1, l2)=>{
            return [...l1, ...l2];
          }

## 10-Check if users name exits

  1. Check that user with such name exists in array of objects

    const chekUserByName = (lista, nombre) => {
      return lista.some((usuario) => {
          return usuario.Nombre.split(/\s+|\./).includes(nombre)
      });
    };
    const userInDatabase = chekUserByName(usuarios, "Eblis");

## 11-Remove all duplicates in an array

  1. Removes all duplicates in an array

         function quitarDuplicados(array){
           return [...new Set(array)];
         }

## 12-Sorting an array

  1. Sort the array of numbers

  2. Sort array of objects by author's last name

          const usersByLastName = users.sort((user, user2) => {
            const userLastName = user.name.split(" ")[1];
            const userLastName2 = user2.name.split(" ")[1];

            if (userLastName < userLastName2) {
              return -1;
            } else {
              return 1;
            }
          });

          console.log(usersByLastName);

## 14-Range function

1. Write a function tha create a range, ex: range(4, 40);

       function range(start, end){
         return [...Array(end-start+1).keys()].map(el=> el + start);
       }

## 15-Shuffle an array

- Respuesta:


## 16-Number of Ocurrences

- Find the number of occurences of minimum value in the list


      const valorMin = Math.min(...array);

      const n = numeros.filter(number => number === minVal).length;
  

## 17-This

What will be logged here?

    function getItem(){
      console.log(this)
    }
    getItem();

And here?

      const item = {
        title:"Ball",
        getItem(){
          console.log("this", this);
        }
      }

      item.getItem()

And here?

      class Item{
        title ="Ball"

        getItem(){
          console.log("this", this);
        }
      }

      const item = new Item();
      item.getItem();

And with a function inside a method?

      class Item{
        title ="Ball"

        getItem(){
          function someFn(){
            console.log("this", this);
          }
          someFn();
        }
      }

      const item = new Item();
      item.getItem();

to get the instance, use arrow functions:

      class Item{
        title ="Ball"

        getItem(){
          [1, 2, 3].map(()=>{
              console.log(this);
          })
        }
      }

      const item = new Item();
      item.getItem();
        
   
    
