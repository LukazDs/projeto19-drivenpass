import { Router } from "express";
import { createUser } from "../controllers/authController";

export const authRouter = Router();

authRouter.post("/create-user", createUser)
