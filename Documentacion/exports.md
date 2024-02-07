# Exports

## module.exports example 1
    const mongoose = require("mongoose");

    const tarjetaEsquema = mongoose.Schema({
        anverso:{type:String}
    })

    const tarjetaModelo = mongoose.model("tarjeta", tarjetaEsquema);

    module.exports = tarjetaModelo;
    
## module exports example 2

    const express = require("express");
    const tarjetaRutas = express.Router();
    const tarjetaModelo = require("../modelos/tarjeta-modelo");

    tarjetaRutas.get("/", (req, res, send)=>{
        
        const tarjeta = new tarjetaModelo({
            anverso:"hola amigue"
        })

        res.send(tarjeta);
    })

    module.exports = tarjetaRutas;
