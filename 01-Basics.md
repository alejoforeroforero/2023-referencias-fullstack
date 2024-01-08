# React study guide
        
- Installation with Vite

      npm create vite@latest
      npm install
      npm run dev (Server for develpment)
      npm run build (Deployment)
      npm run preview(Preview of deployment)  
         
         
- JSX: JavaScript extended
         
      import Component from './components/component'
      <Component />

- Lazy Initial State
         
      import { useState } from "react"

      let x = 0;

      function initalState(){
        x++;
        console.log(x)
        return 0;
      }

      function App() {

        let [x, sumar] = useState(()=>initalState())

        return (
          <>
            <h1>{x}</h1>
            <button onClick={() => sumar(x + 1)}>Sumar</button>
          </>
        )
      }

      export default App


 
 - Map an array:

          const instrumentos = [
             {
               titulo: "Guitarra",
               precio: "$3",
             },
             {
               titulo: "Saxo",
               precio: "$5",
             },
           ];

           return (
             <div>
               {instrumentos.map((instrumento, index) => (
                 <Instrumento titulo={instrumento.titulo} precio={instrumento.precio} />
               ))}
             </div>
           );
 
- Map an array in reverse order:

         { array.map( (item, index)=> <Component /> ).reverse() } 
         
- Elements created in vanilla javascript:

         const crearDiv = () => {
             let htmlEl = [];

             for (let i = 0; i < 20; i++) {
               htmlEl.push(<div>{i}</div>);
             }

             return htmlEl;
          };
          
          
 - Mixing vanilla javascript with components:          
          
             const crearLista = () => {
             let htmlEl = [];

             for (let i = 0; i < 20; i++) {
               htmlEl.push(
                 <Instrumento titulo={`${i}-titulo`} precio={`${i}-precio`} />
               );
             }

             return htmlEl;
           };
         
         
 
   
