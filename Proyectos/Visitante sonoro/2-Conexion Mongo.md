
# Server.js o js principal:

```
const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

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

## Crear el .env:

````
DATABASE_URL=mongodb+srv:.....
ALEJO_HOST=xxxx
ALEJO_USER=xxxxx
ALEJO_PASSWORD=xxxxxx

````