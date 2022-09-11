import { Router } from "express";
import { createNote, getNoteUser, getNoteUserById } from "../controllers/noteController";
import { validateNoteBody } from "../middlewares/validateNoteSchema";
import validateToken from "../middlewares/validateToken";


export const noteRouter = Router();

noteRouter.post("/note", validateToken, validateNoteBody, createNote);
noteRouter.get("/note/:id/user", validateToken, getNoteUserById);
noteRouter.get("/note", validateToken, getNoteUser);

