import { Router } from "express";
import * as credentialController from "../controllers/credentialController";
import { validateCredentialBody } from "../middlewares/validateCredentialSchema";
import validateToken from "../middlewares/validateToken";

export const credentialRouter = Router();

credentialRouter.post("/credential/create", validateToken, validateCredentialBody, credentialController.createCredential);
credentialRouter.get("/credential/:id", validateToken, credentialController.getCredentialById);
credentialRouter.get("/credential", validateToken, credentialController.getCredentialUser);
credentialRouter.delete("/credential/:id", validateToken, credentialController.deleteCredential);
