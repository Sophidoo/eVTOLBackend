import { getSpecificUserController, updatePasswordController, updateUserController, userLoginController, userRegisterationController } from "../controller/UserController.js"
import { isLogin } from "../middleware/isLogin.js";
import express from "express";

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

export default userRoutes;