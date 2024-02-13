1. Crear la ruta

### En route:

````
router.post("/forgotpassword", protect, forgotPassword);
````

### En el controller la función:

``` 
const forgotPassword = asyncHandler(async(req, res)=>{
  res.send("forgot password");
})

module.exports = {
  registerAdmin,
  loginAdmin,
  logoutAdmin,
  getAdmin,
  loginStatus,
  updateAdmin,
  changePassword,
  forgotPassword
};

```

2. Crear el token model

### En la carpeta de models crear el tokenModel.js

```
const mongoose = require("mongoose");

const tokenSchema = mongoose.Schema({
    adminId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'admins'
    },
    token:{
        type:String,
        required:true
    },
    createdAt:{
        type:Data,
        required:true
    },
    expiresAt:{
        type:Data,
        rquired:true
    }

})

const Token = mongoose.model("Token", tokenSchema);
module.exports = Token;
```

3. Crear la función de enviar el email:

### Instalar el nodemailer

```
npm i nodemailer
```

### Crear las variables en . env

```
EMAIL_HOST=smtp-mail.outlook.com
EMAIL_USER=alejomonk@hotmail.com
EMAIL_PASS='xxxxxx'
```

### Crear una carpera de 'utils' y el archivo 'sendMail.js'

```
const nodemailer = require("nodemailer");

const sendEmail = async (subject, message, send_to, sent_from, reply_to)=>{
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: 587,
        auth:{
            user:process.env.EMAIL_USER,
            pass:process.env.EMAIL_PASS
        },
        tls:{
            rejectUnauthorized:false
        }
    })

    const options = {
        from:sent_from,
        to:send_to,
        replyTo:reply_to,
        subject:subject,
        html:message,
    }

    transporter.sendMail(options, function(err, info){
        if(err){
            console.log(err);
        }
        else{
            console.log(info);
        }
    })

}

module.exports = sendEmail;

```

4. Terminar la función en el controller, prestar atención a los nuevos requires!

```

const asyncHandler = require("express-async-handler");
const Admin = require("../models/admin");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Token = require("../models/tokenModel");
const crypto = require("crypto");
const sendEmail = require("../utils/sendEmail");

//Más abajo en la función:

const forgotPassword = asyncHandler(async (req, res) => {
  const { email } = req.body;

  const admin = await Admin.findOne({ email });

  if (!admin) {
    res.status(404);
    throw new Error("Admin does not exists");
  }

  let token = await Token.findOne({adminId: admin._id});

  if(token){
    await token.deleteOne(); 
  }

  let resetToken = crypto.randomBytes(32).toString("hex") + admin._id;

  const hashedToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  await new Token({
    adminId: admin._id,
    token: hashedToken,
    createdAt: Date.now(),
    expiresAt: Date.now() + 30 * (60 * 1000),
  }).save();

  const resetUrl = `${process.env.FRONTEND_URL}/resetpassword/${resetToken}`;

  const message = `
    <h2>Hello ${admin.name} </h2>
    <p>Please use the url below to reset your password</p>
    <p>This reset link is valid for only 30 minutes</p>
    <a href=${resetUrl} clicktracking=off>${resetUrl}</a>
    <p>Regards.... </p>
    <p>Visitante Sonoro</p>
  `;

  const subject = "Password Reset Request";
  const send_to = admin.email;
  const sent_from = process.env.EMAIL_USER;

  try {
    await sendEmail(subject, message, send_to, sent_from);
    res.status(200).json({ success: true, message: "Reset Email Sent" });
  } catch (error) {
    res.status(500);
    throw new Error("Email not sent, please try again");
  }
});

```
