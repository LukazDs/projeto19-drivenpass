import { Router } from "express";
import { createCredential, getCredentialById } from "../controllers/credentialController";
import { validateCredentialBody } from "../middlewares/validateCredentialSchema";
import validateToken from "../middlewares/validateToken";


export const credentialRouter = Router();

credentialRouter.post("/create-credential", validateToken, validateCredentialBody, createCredential);
credentialRouter.get("/create-credential/:id/search", validateToken, getCredentialById);

