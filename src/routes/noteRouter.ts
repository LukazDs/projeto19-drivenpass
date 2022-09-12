import { Router } from "express";
import * as noteController from "../controllers/noteController";
import { validateNoteBody } from "../middlewares/validateNoteSchema";
import validateToken from "../middlewares/validateToken";


export const noteRouter = Router();

noteRouter.post("/note", validateToken, validateNoteBody, noteController.createNote);
noteRouter.get("/note/:id", validateToken, noteController.getNoteUserById);
noteRouter.get("/note", validateToken, noteController.getNoteUser);
noteRouter.delete("/note/:id", validateToken, noteController.deleteNote);
