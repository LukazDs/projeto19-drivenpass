import { Router } from "express";
import { createUser, signInUser } from "../controllers/authController";
import { validateUserBody } from "../middlewares/validateUserSchema";

export const authRouter = Router();

authRouter.post("/create-user", validateUserBody, createUser);
authRouter.post("/signin", validateUserBody, signInUser);
