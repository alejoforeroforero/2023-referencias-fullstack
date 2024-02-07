

# Backend

## Instalación librerías
    npm init 

    npm install --save express mongoose body-parser 

    npm install --save-dev nodemon
    "start":"nodemon app.js"

    npm install jsonwebtoken express-validator bcryptjs

    npm install multer
    

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

## Prueba crear o guardar record
    const card1 = new cardModel({
        nombre:'Alejandro'
    })
    card1.save();

    // para crear el post se debe asegurar que la ruta no esté usada por un app.use sino por un app.get

## Traer record
    const tarjetas = await tarjetaModelo.find();
    const tarjeta = await tarjetaModelo.findById(id);

    const tarjetas = await tarjetaModelo.find({
        categoria: nombre,
    });

    const tarjetas = await tarjetaModelo.find({
        categoria: nombre,
    });

    const categoriaAnteriorDB = await categoriaModelo.findOne({
        nombre: categoriaAnterior,
    });

## Delete 

    const categoriaDb = await categoriaModelo.findOne({ nombre: categoria });

    const index = categoriaDb.ids.indexOf(tarjeta._id);

    if(index > -1){
        categoriaDb.ids.splice(index, 1);

        await categoriaDb.save()
    }

    if(categoriaDb.ids.length < 1){
        await categoriaModelo.findByIdAndDelete(categoriaDb._id)
    }
    
    
