import { Router } from "express";
import { createCredential, getCredentialById, getCredentialUser } from "../controllers/credentialController";
import { validateCredentialBody } from "../middlewares/validateCredentialSchema";
import validateToken from "../middlewares/validateToken";


export const credentialRouter = Router();

credentialRouter.post("/create-credential", validateToken, validateCredentialBody, createCredential);
credentialRouter.get("/create-credential/:id/user", validateToken, getCredentialById);
credentialRouter.get("/create-credential/user", validateToken, getCredentialUser);

