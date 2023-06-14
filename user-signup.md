    const express = require("express");
    const bodyParser = require("body-parser");
    const bcrypt = require("bcryptjs");
    const { check, validationResult } = require("express-validator");
    const mongoose = require("mongoose");

    const usuarioEsquema = mongoose.Schema({
        nombre: { type: String },
        email: { type: String },
        password: { type: String },
    });

    const usuarioModelo = mongoose.model("usuarios", usuarioEsquema);

    const app = express();
    app.use(bodyParser.json());

    app.post(
        "/signup",
        [
            check("nombre").not().isEmpty(),
            check("email").normalizeEmail().isEmail(),
            check("password").isLength({ min: 6 }),
        ],
        async (req, res, next) => {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                res.send("hay errores o campos vacios");
            }

            const { nombre, email, password } = req.body;

            const usuarioDB = await usuarioModelo.findOne({ email: email });

            if (usuarioDB) {
                res.json("ya existe el usuario");
                return;
            }

            const passwordHashed = await bcrypt.hash(password, 12);

            const usuarioNuevo = new usuarioModelo({
                nombre,
                email,
                password: passwordHashed,
            });

            await usuarioNuevo.save();

            res.json(usuarioNuevo);
        }
    );

    mongoose
    .connect(`mongodb:\/\/localhost/app`)
    .then(() => {
        app.listen(5002);
        console.log("conecto");
    })
    .catch((error) => {
        console.log(error);
    });
