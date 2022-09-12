import { Router } from "express";
import { validateCardBody } from "../middlewares/validateCardSchema";
import validateToken from "../middlewares/validateToken";
import { insertCard } from "../controllers/cardController";

export const cardRouter = Router();

cardRouter.post("/cards", validateToken, validateCardBody, insertCard);
