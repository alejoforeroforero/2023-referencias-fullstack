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

## 2.1-Highlight all of the words over 8 characters long in the paragraph text with yellow background

Respuesta:

      const selectWords = (p)=>{
        let newText = p.innerText;

        newText = newText.split(" ").map(word =>{
          if(word.length > 8){
            return `<span style="background-color:yellow">${word}</span> ` 
          }else{
            return word 
          }
        }).join(" ")

        p.innerHTML = newText;
      }

      const p = document.querySelector("p");

      selectWords(p);

## 2.2-add a link to de DOM

## 2.3-Split sentence in ". "

## 2.4-Event delegation


# 3. Asynchronous Javascript

## 3.1 - Write an example of fetching data with XMLHttpRequest

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


## 3.2 - Write an example of fetching data with Fetch API

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

Using asycn await:

    const fetchData = async(url)=>{
      const res = await fetch(url);
      const data = await res.json();
      return data;
    }

    const data = await fetchData(apiUrl)

    console.log(data);

## 3.3 - Basic callback


## 3.4 - List of asynchronous functions

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


## 3.5 - Convert callback to Promise

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

## 3.6 - map in Promises

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
        
## 3.7 async await

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

# 5 Task Interview

## 5.1 Fibonacci

// Design a function which returns a fibonacci sequence value
// The Fibonacci sequence is the integer sequence where the first two terms are 0 and 1. After that, the next term is defined as the sum of the previous two terms. Hence, the nth term is the sum of (n-1)th term and (n-2)th term.
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144;


Mi respuesta:

    const createSeq = (length)=>{

        let seq = [];

        for(let i=0; i<length+1;i++)
        {
            let number = 0;

            if(i<2){
                number = i
            }else{
                number = seq[i-1] + seq[i-2]; 
            }

            seq.push(number);
        }

        return seq;
    }


    const fibonnaci = createSeq(8);

Respuesta del video:

    const fibonacci = (n) => {
      if (n < 2) {  
        return 1;
      } else {
        return fibonacci(n - 2) + fibonacci(n - 1);
      }
    };

const f = fibonacci(7);


## 5.2 Palindrome

// Write a function which checks if string is a palindrome

Mi respuesta:

      const checkIfPalindrome = (word) => {
        const letters = word.toLowerCase().split("");

        return word.toLowerCase() === letters.reverse().join("");
      };

      const isPalindrome = checkIfPalindrome("OsA");

      console.log(isPalindrome);


Respuesta del video

      const checkPalindrome = (str) => {
        const word = str
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "");

        return word === word.split("").reverse().join("");
      };

      const isPalindrome = checkPalindrome("oró");

## 5.3 Anagram

// Write a function which checks if string is an anagram

// Anagrams are words that have the same characters in the same quantity. This means that two strings are anagrams if we can rearrange one to get the other.
// Here are some examples of words that are anagrams.
// “listen” and “silent”
// “rail safety” and “fairy tales”
// “dormitory” and “dirty room”
// “the eyes” and “they see”

Mi respuesta:

    const checkIfAnagram = (w1, w2) => {
      const w1F = w1.trim().toLowerCase();
      const w2F = w2.trim().toLowerCase();

      return w1F.split("").sort().join("") === w2F.split("").sort().join("");
    };

    const isAnagram = checkIfAnagram("Listen", "silent");

Respuesta del video:

    const checkIfAnagram = (w1, w2) => {
      if (w1.length !== w2.length) {
        return false;
      }

      const w1F = w1.trim().toLowerCase();
      const w2F = w2.trim().toLowerCase();

      if (w1F === w2F) {
        return false;
      }

      return w1F.split("").sort().join("") === w2F.split("").sort().join("");
    };

    const isAnagram = checkIfAnagram("Listen", "listen");



## 5.4 Count vowels

    const str1 = "Este es un texto al cual se le van a contar las vocales";
    const str2 = "Alejo";

    const countVowels = (str) => {
      const vowels = ["a", "e", "i", "o", "u"];

      return str
        .toLowerCase()
        .split("")
        .reduce((acc, char) => {
          debugger;
          return vowels.includes(char) ? acc + 1 : acc;
        }, 0);
    };

    const nV = countVowels(str1);

    console.log(nV);

# 6 Task from every day work

## 6.1 Convert to title case
Write a function to convert a string to title case

Provided test cases
titleCase(“I’m a little tea pot”) should return a string.
titleCase(“I’m a little tea pot”) should return “I’m A Little Tea Pot”.
titleCase(“sHoRt AnD sToUt”) should return “Short And Stout”.
titleCase(“HERE IS MY HANDLE HERE IS MY SPOUT”) should return “Here Is My Handle Here Is My Spout”.

Respuesta:

    const str1 = "Este es un texto al cual se le van a contar las vocales";
    const str2 = "Alejo";

    const titleCase = (str) => {
      return str
        .toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    };

    const newText = titleCase(str1);

    console.log(newText, str1);

## 6.2 Convert to 24 hours

Write a function which can convert the time input given in 12 hours format to 24 hours format

convertTo24HrsFormat("12:10AM");    // 00:10
convertTo24HrsFormat("5:00AM");     // 05:00
convertTo24HrsFormat("12:33PM");    // 12:33
convertTo24HrsFormat("01:59PM");    // 13:59
convertTo24HrsFormat("11:8PM");     // 23:08
convertTo24HrsFormat("10:02PM");    // 22:02

Respuesta:

    const convertTo24HrsFormat = (str) => {
      const strLowCase = str.toLowerCase();
      let [hours, min] = strLowCase.split(":");

      if (min.endsWith("am")) {
        hours = hours === "12" ? "0" : hours;
      } else {
        hours = hours === "12" ? hours : String(+hours + 12);
      }

      return hours.padStart(2, 0) + ":" + min.slice(0, -2).padStart(2, 0);
    };

const t = convertTo24HrsFormat("5:10PM");

## 6.3 Map data to frontend format. The main element is location key and we need to map all data to it. We will have 5 objects at the end.

    const loc = [
      {
        location_key: [32, 22, 11],
        autoassign: 1,
      },
      {
        location_key: [41, 42],
        autoassign: 1,
      },
    ];

    const bulkConfig = [
      {
        dataValues: {
          config_key: 100,
        },
      },
      {
        dataValues: {
          config_key: 200,
        },
      },
    ];

// [{config_key: 100, location_key: 32, autoassign: 1}, {config_key: 100, location_key: 22, autoassign: 1}]

Mi Solución:

      const arreglarData = ()=>{

          let list = []

          loc.map((location, index) => {
            const configKey = bulkConfig[index].dataValues.config_key
            location.location_key.map((locId)=>{

              const obj = {
                locationKey: locId,
                configKey,
                autoassign:location.autoassign,       
              } 
          
              list.push(obj);
            })
          })

          return list;
        }

        const data = arreglarData();

Solución del video:

      const arreglarData = () => {
        return loc
          .map((locEl, index) => {
            return locEl.location_key.map((locatonKey) => {
              return {
                location_key: locatonKey,
                config_key: bulkConfig[index].dataValues.config_key,
                autoassign: locEl.autoassign,
              };
            });
          })
          .reduce((arr, acc) => arr.concat(acc), []);
      };

      const data = arreglarData();


## 6.4 Write a function to Replace parameters in url

    const initialUrl = "/posts/:postId/comments/:commentId";

    const resultUrl = replaceParamsInUrl(initialUrl, [
      { from: "postId", to: "1" },
      { from: "commentId", to: "3" },
    ]);
    console.log(resultUrl);

Mi respuesta:

      const replaceParamsInUrl = (url, list)=>{
        var finalUrl = url;

        list.map(obj =>{
          finalUrl = finalUrl.replace(`:${obj.from}`, obj.to);
        })

        return finalUrl;
      }

Respuesta del video:

      const replaceParamsInUrl = (url, list)=>{
        return list.reduce((acc, value)=>{
          return acc.replace(":" + value.from, value.to)
        }, url)
      }

## 6.5 Format backend validation message to frontend format

    const backendErrors = {
      email: {
        errors: [
          {
            message: "Can't be blank",
          },
        ],
      },
      password: {
        errors: [
          {
            message: "Must contain symbols in different case",
          },
          {
            message: "Must be at least 8 symbols length",
          },
        ],
      },
      passwordConfirmation: {
        errors: [
          {
            message: "Must match with password",
          },
        ],
      },
    };

["Email: Can't be blank", "Password: Must contain symbols, Must be at least 8 symbols", "passwordConfirmation: Must match with password"]

mi respuesta:

    const formatErrors = (errorsList) => {
      let errorsFormatted = [];

      for (const errorObj in errorsList) {
        let errorMsg = errorObj + ": ";

        errorsList[errorObj].errors.map((error, index) => {
          errorMsg +=
            index === errorsList[errorObj].errors.length - 1
              ? error.message
              : (errorMsg += error.message + ", ");
        });

        errorsFormatted.push(errorMsg);
      }

      return errorsFormatted;
    };

    const errors = formatErrors(backendErrors);

    console.log(errors);

Otra respuesta:

      const formatErrors = () => {
        let list = [];

        for (const key in backendErrors) {
          let error = key.charAt(0).toUpperCase() + key.slice(1) + ": ";

          const msg = backendErrors[key].errors
            .map((error) => error.message)
            .join(", ");

          error += msg;

          list.push(error);
        }

        return list;
      };

      const errorsList = formatErrors();

      console.log(errorsList);

respuesta video:

    const formatErrors = (errorsList) => {
        return Object.entries(errorsList).map(([field, errorObj], index) =>{
          const msg = errorObj.errors.map((error) => error.message).join(", ")

          return msg;
        })
        }

      const errorsF = formatErrors(backendErrors);

      console.log(errorsF)

## 6.6 Flat list to nested list

// Transform flat list to nested list

      const flatList = [
      {
        id: 1,
        name: "lvl 1 item 1",
        parentId: null,
      },
      {
        id: 2,
        name: "lvl 1 item 2",
        parentId: null,
      },
      {
        id: 3,
        name: "lvl 2 item 3",
        parentId: 1,
      },
      {
        id: 4,
        name: "lvl 3 item 4",
        parentId: 3,
      },
      {
        id: 5,
        name: "lvl 2 item 5",
        parentId: 2,
      },
    ];

    //[
    // {
    //    id: 1,
    //    children: [
    //      {
    //        id: 3,
    //        children: [
    //          {
    //            id: 4,
    //            children: []
    //          }
    //        ]
    //      }
    //    ]
    // },
    // {
    //    id: 2,
    //    children: [
    //      {
    //        id: 5,
    //        children: []
    //      }
    //    ]
    // }
    //]

Respuesta:

      const addChild = (item)=>{
        const childrens = flatList.filter(nItem => nItem.parentId === item.id)

        let list = []

        if(childrens.length > 0){
          list = childrens.map((child) => addChild(child))
        }

        const newObj={
          id:item.id,
          childrens:list
        }

        return newObj;
      }



      const nestedList = flatList.filter(item => item.parentId === null).map(addChild)

# 7 Task from the internet

## 7.1 Reverse alphabet but not symbols

a-bC-dEf=ghlj!! 
oso.mama

    const reverseWord = (text) => {
      const textArray = text.split("");

      let alphabet = [];
      let symbols = [];

      textArray.map((char, index) => {
        if (char.toLowerCase() === char.toUpperCase()) {
          const symbol = {
            char,
            index,
          };
          symbols.push(symbol);
        } else {
          alphabet.push(char);
        }
      });

      let alphabetInvert = alphabet.reverse();

      symbols.map(symbol =>{
        alphabetInvert.splice(symbol.index, 0, symbol.char);
      })

      return alphabetInvert.join("");
    };

    const newWord = reverseWord("a-bC-dEf=ghlj!!");

## 7.2 Convert milliseconds to time format

## 7.3 Use Promise to wait for audio data

    import { audioSrc } from "./variables.js";

    const traerAudioData = (url)=>{
      let audio = new Audio();
      document.body.appendChild(audio);

      return new Promise(resolve=>{
        audio.src = url;
        audio.addEventListener("loadeddata", ()=>{
          const duration = audio.duration;
          resolve(duration)
        })
      })
    }

    const duration = await traerAudioData(audioSrc).then(data=> data);

    console.log(duration);

## 7.4 Valid Substring

const k = "abcdddeeeeaabbbcdhhhaopppppp";

const y = "baaasooo";

const getIndices = (text) => {
  const tArray = text.toLowerCase().split("");

  let counter = 0;
  let lastValue = null;

  let validSubstringIndices = [];

  tArray.map((letter, index) => {
    if (letter === lastValue) {
      counter++;
      if (tArray.length === index + 1) {
        if (counter > 1) {
          const indices = [index - counter, index];
          validSubstringIndices.push(indices);
        }
      }
    } else {
      if (counter > 1) {
        const indices = [index - counter - 1, index - 1];
        validSubstringIndices.push(indices);
      }
      counter = 0;
    }

    lastValue = letter;
  });

  return validSubstringIndices;
};

const indices = getIndices(k);

console.log(indices);
