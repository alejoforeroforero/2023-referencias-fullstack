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
