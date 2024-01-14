- Filter example:

      const archivos=[
          's1.mp4',
          's2.pdf',
          's3.mp3',
          'El tema del papelón.mp3',
          'mi video.mp4',
          'tesis.pdf',
          'tesis finalisima.pdf',
          'agua.mov',
          'rio.xlx'
      ]

      function empezar(){

          const pdfs = archivos.filter(archivo =>{

              const lastIndex = archivo.lastIndexOf('.');
              const tipo = archivo.slice(lastIndex+1);

              return tipo === 'pdf';
          }) 
      }
      
- Filter example2:

      const cards = DUMMY_CARDS.filter(card=>{
          return card.creator === userId;
      })

      const cards = DUMMY_CARDS.filter(card => card.creator === userId); //short way
      DUMMY_CARDS = DUMMY_CARDS.filter(card => card.id !== cId); // Filter all but the selected id
      