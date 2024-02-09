## Routes:

````
const express = require("express");
const router = express.Router();
const { registerAdmin, loginAdmin, logoutAdmin } = require("../controllers/admin");

router.post('/register', registerAdmin);
router.post('/login', loginAdmin);
router.get('/logout', logoutAdmin);


module.exports = router;

````

## Controller:
````
const asyncHandler = require("express-async-handler");
const Admin = require("../models/admin");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

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
      sameSite: "none",
      secure: true,
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

const loginAdmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("Please add email and password");
  }

  const admin = await Admin.findOne({ email });

  if (!admin) {
    res.status(400);
    throw new Error("User not found,  please signup");
  }

  const passwordIsCorrect = await bcrypt.compare(password, admin.password);

  if (admin && passwordIsCorrect) {
    const token = generateToken(admin._id);

    res.cookie("token", token, {
      path: "/",
      httpOnly: true,
      expires: new Date(Date.now() + 1000 * 86400),
      sameSite: "none",
      secure: true,
    });

    const { _id, name, email, photo, phone, bio } = admin;

    res.status(200).json({
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
    throw new Error("Invalid email or password");
  }
});

const logoutAdmin = asyncHandler(async (req, res) => {
  res.cookie("token", "", {
    path: "/",
    httpOnly: true,
    expires: new Date(0),
    sameSite: "none",
    secure: true,
  });
  return res.status(200).json({ message: "Successfully logout" });
});

module.exports = {
  registerAdmin,
  loginAdmin,
  logoutAdmin,
};

````