## Crear el token después de la creación del Admin:

```
const asyncHandler = require("express-async-handler");
const Admin = require('../models/admin');
const jwt = require("jsonwebtoken")

const generateToken = (id)=>{
  return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: "1d"})

}

const registerAdmin = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if(!name || !email || !password){
    res.status(400);
    throw new Error("Please fill in all required fields")
  }

  if(password.length < 6){
    res.status(400);
    throw new Error("Password must be up to 6 characters")
  }

  const adminExists = await Admin.findOne({email});

  if(adminExists){
    res.status(400);
    throw new Error("Email has already been registered")
  }

  const admin = await Admin.create({
    name, 
    email,
    password
  })

  if(admin){
    const token = generateToken(admin._id)

    const { _id, name, email, photo, phone, bio } = admin;

    res.status(201).json({
      _id, name, email, photo, phone, bio, token
    })
  }else{
    res.status(400)
    throw new Error("Invalid user data");
  }
});

module.exports = {
  registerAdmin,
};


```