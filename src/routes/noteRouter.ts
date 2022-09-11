import { Router } from "express";
import { createNote } from "../controllers/noteController";
import { validateNoteBody } from "../middlewares/validateNoteSchema";
import validateToken from "../middlewares/validateToken";


export const noteRouter = Router();

noteRouter.post("/note", validateToken, validateNoteBody, createNote);
// noteRouter.get("/note/:id/user", validateToken, getNoteUser);

