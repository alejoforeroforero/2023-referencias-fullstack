## Crear el primer get y los middle wares de express:

````
// Middlewares

app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(bodyParser.json());

//Routes

app.get('/', (req, res)=>{
    res.send("Home Page")
})

````

## Correr el node y revisar en el browser:

http://localhost:5000/

## Server.js final:

```
const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();


// Middlewares

app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(bodyParser.json());

//Routes

app.get('/', (req, res)=>{
    res.send("Home Page")
})

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });


```