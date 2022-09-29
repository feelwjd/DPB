import express from "express";
import userController from "../controller/userController";
const userRouter = express.Router();

userRouter.post("/signin",userController.signin);

userRouter.post("/signup",userController.signup);

userRouter.post("/userUpdate",userController.update);

module.exports = userRouter;