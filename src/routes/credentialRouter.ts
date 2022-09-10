import { Router } from "express";
import { createCredential } from "../controllers/credentialController";
import { validateCredentialBody } from "../middlewares/validateCredentialSchema";
import validateToken from "../middlewares/validateToken";


export const credentialRouter = Router();

credentialRouter.post("/create-credential", validateToken, validateCredentialBody, createCredential);

