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
      
      
- Shuffle Array:

      function shuffle(array) {
            let currentIndex = array.length,
              randomIndex;

            // While there remain elements to shuffle.
            while (currentIndex !== 0) {
              // Pick a remaining element.
              randomIndex = Math.floor(Math.random() * currentIndex);
              currentIndex--;

              // And swap it with the current element.
              [array[currentIndex], array[randomIndex]] = [
                array[randomIndex],
                array[currentIndex],
              ];
            }

            return array;
      }
      
   - Array:

            const names = users
              .sort((user1, user2) => (user1.age > user2.age ? -1 : 1))
              .filter(user => user.isActive)
              .map(user => user.name);

            console.log(names);
