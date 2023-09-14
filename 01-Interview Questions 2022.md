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
        
   ## 18-Classes

   Design a class for employee which takes id and name in during construction of object and has a salary property

          class Employee{
          
          constructor(id, name){

            if(!id || !name){
              throw new Error('id and name are required');
            }

            this.id = id;
            this.name = name
          }

          setSalary(salary){
            this.salary = salary;
          }

          getSalary(){
            return this.salary;
          }

          getId(){
            return this.id;
          }

          getName(){
            return this.name;
          }
        }

Design a class for Manager which is employee and can have department property

        class Employee{
          constructor(id, name){

            if(!id || !name){
              throw new Error('id and name are required');
            }

            this.id = id;
            this.name = name
          }

          setSalary(salary){
            this.salary = salary;
          }

          getSalary(){
            return this.salary;
          }

          getId(){
            return this.id;
          }

          getName(){
            return this.name;
          }
        }

        class Manager extends Employee{
          setDepartment(department){
            this.department = department;
          }

          getDepartment(){
            return this.department;
          }
        }

## 19-Prototypes

    var Empleado = function(id, name){
      if(!id || !name){
        alert("el id y el name son requeridos");
        return;
      }
    }

    Empleado.prototype.setSalary = function(salary){
      this.salary = salary;
    }

    Empleado.prototype.getSalary = function(){
      if(this.salary){
        return this.salary;
      }else{
        return 0;
      }
    }

    const empleado = new Empleado(1, "Alejandro");

## 20-Recomendaciones

## 21-Modules

Create a es6 module with function getName, getSurname, and default export getFullName

Create the same with commonJS module

## 22-Debounce

## 23-Throttel


# 2. Working with DOM

## 1-Highlight all of the words over 8 characters long in the paragraph text with yellow background

## 2-add a link to de DOM

## 3-Split sentence in ". "


# 3. Asynchronous Javascript

## 1 - Write an example of fetching data with XMLHttpRequest

    const apiUrl = "https://api.github.com/users/alejoforeroforero/repos";
    const cssUrl = "./main.css";

    const xhr = new XMLHttpRequest();
    xhr.open("GET", cssUrl);
    xhr.send();
    xhr.onload = function () {
      if (xhr.status !== 200) {
        console.log("Error" + xhr.status + xhr.statusText);
      } else {
        console.log(xhr.response);

        const style = document.createElement("style");
        style.rel = "stylesheet";
        style.innerHTML = this.responseText;
        document.getElementsByTagName("head")[0].appendChild(style);
      }
    };
    xhr.onerror = function(){
      console.log("falló el request");
    }


## 2 - Write an example of fetching data with Fetch API

    const apiUrl = "https://api.github.com/users/alejoforeroforero/repos";
    const cssUrl = "./main.css";

    fetch(cssUrl)
      .then((res) => res.text())
      .then((data) => {
        const style = document.createElement("style");
        style.rel = "stylesheet";
        style.innerHTML = data;
        document.getElementsByTagName("head")[0].appendChild(style);
      })
      .catch((error) => {
        console.log(error);
      });

## 3 - Basic callback


## 4 - List of asynchronous functions

    const asyncFunc1 = (callback)=>{
      setTimeout(()=>{
        callback(1)
      }, 3000);
    }

    const asyncFunc2 = (callback)=>{
      setTimeout(()=>{
        callback(2)
      }, 2000);
    }

    const asyncFunc3 = (callback)=>{
      setTimeout(()=>{
        callback(3)
      }, 1000);
    }

    const asyncParallel = (asyncFuncs, callback)=>{
      const resultArray = new Array(asyncFuncs.length);

      let resultCounter = 0;

      asyncFuncs.forEach((asyncFunc, index)=>{
        asyncFunc((value)=>{
          resultArray[index] = value;
          resultCounter++

          if(resultCounter >= asyncFuncs.length){
            callback(resultArray)
          }
        })
      })
    }

    const lista = [asyncFunc1, asyncFunc2, asyncFunc3];

    const imprimir = (data)=>{
      console.log(data);
    }

    asyncParallel(lista, imprimir);


## 5 - Convert callback to Promise

    const asyncFunc1 = (callback) => {
      setTimeout(() => {
        callback(1);
      }, 1000);
    };

    const promisifyAsyncFunc = () => {
      return new Promise((resolve) => {
        asyncFunc1((data) => {
          resolve(data);
        });
      });
    };

    promisifyAsyncFunc().then((data) => {
      console.log(data);
    });

## 6 - map in Promises

      const users = [
        {
          id: 1,
          name: "Alejo",
        },
        {
          id: 2,
          name: "Patu",
        },
        {
          id: 3,
          name: "Iñaki",
        },
      ];

      const userStatus = [
        {
          id: 1,
          isActive: true,
        },
        {
          id: 2,
          isActive: true,
        },
        {
          id: 3,
          isActive: false,
        },
      ];

      const getUsers = () => {
        return new Promise((resolve) => {
          resolve(users);
        });
      };

      const getStatus = () => {
        return new Promise((resolve) => {
          resolve(userStatus);
        });
      };

      const mapUsers = (users, UStatus) => {
        return users.map((user) => {
          const isActive = userStatus.find((userS) => userS.id == user.id).isActive;
          return { ...user, isActive };
        });
      };

      Promise.all([getUsers(), getStatus()])
        .then(([users, usersStatus]) => mapUsers(users, usersStatus))
        .then(lista=>{
          console.log(lista);
        })
        
## 7 async await

      const getMappedUsers = async () => {
        try {
          const users = await getUsers();
          const userStatus = await getStatus();

          const mappendUsers = users.map((user) => {
            const isActive = userStatus.find((userS) => userS.id == user.id).isActive;
            return { ...user, isActive };
          });

          console.log(mappendUsers);
        } catch (error) {
          console.log(error);
        }
      };

      getMappedUsers();

Otro ejemplo con await:

      const traerCss = (url) => {
        return new Promise((resolve) => {
          fetch(url)
            .then((res) => res.text())
            .then((data) => {
              const style = document.createElement("style");
              style.rel = "stylesheet";
              style.innerHTML = data;
              document.getElementsByTagName("head")[0].appendChild(style);

              resolve();
            })
            .catch((error) => {
              console.log(error);
            });
        });
      };

      const pintarInfo = async () => {
        const cssUrl = "./main.css";

        try {
          const css = await traerCss(cssUrl);
          continuar();
        } catch (err) {
          console.log(err);
        }
      };

      pintarInfo();

      const continuar = () => {
        debugger;
      };
