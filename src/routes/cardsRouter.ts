import { Router } from "express";
import { validateCardBody } from "../middlewares/validateCardSchema";
import validateToken from "../middlewares/validateToken";
import * as cardController from "../controllers/cardController";

export const cardRouter = Router();

cardRouter.post("/card", validateToken, validateCardBody, cardController.insertCard);
cardRouter.get("/card", validateToken, cardController.getCardUser);
cardRouter.get("/card/:id", validateToken, cardController.getCardUserById);
cardRouter.delete("/card/:id", validateToken, cardController.deleteCard);
