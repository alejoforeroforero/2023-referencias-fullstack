## Ejemplo de Controller (uso de asyncHandler)

````
const asyncHandler = require("express-async-handler");
const Admin = require('../models/admin');

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

    const { _id, name, email, photo, phone, bio } = admin;

    res.status(201).json({
      _id, name, email, photo, phone, bio
    })
  }else{
    res.status(400)
    throw new Error("Invalid user data");
  }
});

module.exports = {
  registerAdmin,
};


````