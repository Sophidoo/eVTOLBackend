import { getSpecificUserController, updatePasswordController, updateUserController, userLoginController, userRegisterationController } from "../controller/UserController.js"
import { isLogin } from "../middleware/isLogin.js";
import express from "express";
import { adminLoginController, adminRegisteration, changePassword } from "../controller/AdminController.js";

const userRoutes = express.Router()

// Register route
userRoutes.post("/register", userRegisterationController);

// Login route
userRoutes.post("/login", userLoginController)

// get a specific user details
userRoutes.get("/specificUser", isLogin, getSpecificUserController)

// update user details
userRoutes.put("/update", isLogin, updateUserController)

// update password
userRoutes.put("/updatepassword", isLogin, updatePasswordController)

// register an admin
userRoutes.post("/admin", adminRegisteration);

// admin login
userRoutes.post("/adminlogin", adminLoginController);

// change admin password
userRoutes.put("/adminpassword/:username", changePassword)

export default userRoutes;