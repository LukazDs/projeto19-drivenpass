import { Router } from "express";
import { createCredential } from "../controllers/credentialController";
import { validateCredentialBody } from "../middlewares/validateCredentialSchema";


export const credentialRouter = Router();

credentialRouter.post("/create-credential", validateCredentialBody, createCredential);

