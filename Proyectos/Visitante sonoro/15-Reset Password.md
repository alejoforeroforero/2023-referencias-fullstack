1. Crear la función del ResetPassword, no olvidar inlcuirla en los exports!:

```
const resetPassword = asyncHandler(async (req, res) => {
  const { password } = req.body;
  const { resetToken } = req.params;

  const hashedToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  const adminToken = await Token.findOne({
    token: hashedToken,
    expiresAt: { $gt: Date.now() },
  });

  if (!adminToken) {
    res.status(404);
    throw new Error("Invalid or expired Token");
  }

  const admin = await Admin.findOne({ _id: adminToken.adminId });
  admin.password = password;
  await admin.save();
  res.status(200).json({
    message:'Password Reset Successful, Please Login'
  })
});
```

2. Crear la Ruta, no olvidar agregarla en los requires!:

```
router.put("/resetpassword/:resetToken", protect, resetPassword);
```