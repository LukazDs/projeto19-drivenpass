import { Router } from "express";
import { validateCardBody } from "../middlewares/validateCardSchema";
import validateToken from "../middlewares/validateToken";
import { getCardUser, getCardUserById, insertCard, deleteCard } from "../controllers/cardController";

export const cardRouter = Router();

cardRouter.post("/cards", validateToken, validateCardBody, insertCard);
cardRouter.get("/cards", validateToken, getCardUser);
cardRouter.get("/cards/:id", validateToken, getCardUserById);
cardRouter.delete("/cards/:id", validateToken, deleteCard);