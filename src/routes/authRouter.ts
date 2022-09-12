import { Router } from "express";
import * as authController from "../controllers/authController";
import { validateUserBody } from "../middlewares/validateUserSchema";

export const authRouter = Router();

authRouter.post("/user/create", validateUserBody, authController.createUser);
authRouter.post("/user/signin", validateUserBody, authController.subscribeUser);
