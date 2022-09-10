import { Router } from "express";
import { createUser } from "../controllers/authController";
import { validateUserBody } from "../middlewares/validateUserSchema";

export const authRouter = Router();

authRouter.post("/create-user", validateUserBody, createUser)
