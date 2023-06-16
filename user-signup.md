const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

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
      res.send('Hay errores');
      return;
    }

    const { nombre, email, password } = req.body;

    const usuarioDB = await usuarioModelo.findOne({ email: email });

    if (usuarioDB) {
      res.send("el usuario ya exista, haz loggin");

      return;
    }

    const hashedP = await bcrypt.hash(password, 12);

    const usuario = new usuarioModelo({
      nombre,
      email,
      password: hashedP,
    });

    await usuario.save();

    res.json(usuario);
  }
);

app.post("/login", async (req, res, next) => {
  const { nombre, email, password } = req.body;

  const usuarioDB = await usuarioModelo.findOne({ email: email });

  if (!usuarioDB) {
    res.send("No esiste el usuario");
    return;
  }

  const passwordBueno = await bcrypt.compare(password, usuarioDB.password);

  if (!passwordBueno) {
    res.send("El password está mal");
    return;
  }

  const token = jwt.sign({ userId: usuarioDB._id }, "clave_secreta", {
    expiresIn: "1h",
  });

  const usuarioData = {
    id: usuarioDB._id,
    nombre: usuarioDB.nombre,
    email: usuarioDB.email,
    token,
  };

  res.json({ usuarioData });
});

mongoose
  .connect(`mongodb:\/\/localhost/datos`)
  .then((req, res, next) => {
    app.listen(3500);
    console.log("conecto");
  })
  .catch((error) => {
    console.log(error);
  });
