import { Router } from "express";
import { createCredential, getCredentialById, getCredentialUser, deleteCredential } from "../controllers/credentialController";
import { validateCredentialBody } from "../middlewares/validateCredentialSchema";
import validateToken from "../middlewares/validateToken";


export const credentialRouter = Router();

credentialRouter.post("/create-credential", validateToken, validateCredentialBody, createCredential);
credentialRouter.get("/credential/:id/user", validateToken, getCredentialById);
credentialRouter.get("/credential/user", validateToken, getCredentialUser);
credentialRouter.delete("/credential/:id/user", validateToken, deleteCredential);

