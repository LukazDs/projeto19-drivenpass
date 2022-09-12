import { Router } from "express";
import { validateCardBody } from "../middlewares/validateCardSchema";
import validateToken from "../middlewares/validateToken";

export const noteRouter = Router();

noteRouter.post("/cards", validateToken, validateCardBody);
