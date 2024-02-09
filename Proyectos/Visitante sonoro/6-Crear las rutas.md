## Importar la Ruta del modelo en Server.js

```
const adminRoute = require("./routes/admin")

```

## Crear el middleware de la ruta:

```
// Routes Middleware
app.use("/api/admin/", adminRoute);
```

## Ejemplo de cómo quedaría hasta ahora el Server.js:

````
const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const grabacionesRouter = require("./routes/grabaciones");
const adminRoute = require("./routes/admin")


const app = express();

// Middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Routes Middleware
app.use("/api/admin/", adminRoute);

//Routes

app.get("/", (req, res) => {
  res.send("Home Page");
});
app.use("/admin/grabaciones/", grabacionesRouter);


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


````