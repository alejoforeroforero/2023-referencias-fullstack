

# Backend

## Instalación librerías
    npm init 
    npm install --save express mongoose body-parser express-validator bcryptjs multer
    npm install jsonwebtoken
    npm install --save-dev nodemon
    "start":"nodemon app.js"

## Git ignore
    backend/node_modules

## Mongoose connection
    mongoose
    .connect(`mongodb:\/\/localhost/flip-cards-v1`)
    .then(() => {
        app.listen(3400);
        console.log('conecto');
    })
    .catch((error) => {
        console.log(error);
    }); 

## Mongoose Schema
    const cardSchema = new mongoose.Schema({
        nombre:{ type:String }
    })

    const cardModel = new mongoose.model("cards", cardSchema);

## Prueba crear record
    const card1 = new cardModel({
        nombre:'Alejandro'
    })
    card1.save();

    // para crear el post se debe asegurar que la ruta no esté usada por un app.use sino por un app.get

## Traer record
    
    
