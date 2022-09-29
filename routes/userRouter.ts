import express from "express";
import userController from "../controller/userController";
const userRouter = express.Router();

userRouter.post("/login",userController.login);

module.exports = userRouter;