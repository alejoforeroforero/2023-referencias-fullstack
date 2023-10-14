# React study guide

- Installation

         npx create-react-app . // To create a new React App in the root folder. Note: this folder must be in lowercase letters
         
         npm i uuid //Library to create random unique ids
         
- Installation with Vite

         npm create vite@latest
         npm install
         npm run dev (Server for develpment)
         npm run build (Deployment)
         npm run preview(Preview of deployment)  
         
         
- JSX: JavaScript extended
         
         import Component from './components/component'
         <Component />
 
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
         
         
 
   
