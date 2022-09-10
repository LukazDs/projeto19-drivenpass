import { Request, Response } from "express";
import * as credentialServices from "../services/credentialServices";
import { ICredentialsBodyReq } from "../types/utilTypes";

export async function createCredential(req: Request, res: Response) {

    const credential: ICredentialsBodyReq = req.body;
    const { verified } = res.locals;

    await credentialServices.findCredentialByUrl(credential, verified.id);
    await credentialServices.insertCredential(credential, verified.id);

    res.status(201).send("Credential Created!");

}
