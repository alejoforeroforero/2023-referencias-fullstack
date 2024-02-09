## Llamar el middle ware en Server.js

````
const cookieParser = require('cookie-parser');


app.use(cookieParser());

````


## Poner la funcionalidad del cookie en el Admin/User controller, que quedaría así por el momento:

```
const asyncHandler = require("express-async-handler");
const Admin = require("../models/admin");
const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

const registerAdmin = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please fill in all required fields");
  }

  if (password.length < 6) {
    res.status(400);
    throw new Error("Password must be up to 6 characters");
  }

  const adminExists = await Admin.findOne({ email });

  if (adminExists) {
    res.status(400);
    throw new Error("Email has already been registered");
  }

  const admin = await Admin.create({
    name,
    email,
    password,
  });

  if (admin) {
    const token = generateToken(admin._id);

    res.cookie("token", token, {
      path: "/",
      httpOnly: true,
      expires: new Date(Date.now() + 1000 * 86400),
      sameSite:"none",
      secure:true
    });

    const { _id, name, email, photo, phone, bio } = admin;

    res.status(201).json({
      _id,
      name,
      email,
      photo,
      phone,
      bio,
      token,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

module.exports = {
  registerAdmin,
};

```