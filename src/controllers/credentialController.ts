import { Request, Response } from "express";
import * as credentialServices from "../services/credentialServices";
import { ICredentials, ICredentialsBodyReq } from "../types/utilTypes";

export async function createCredential(req: Request, res: Response) {

    const credential: ICredentialsBodyReq = req.body;
    const { verified } = res.locals;

    const payload: ICredentials = { ...credential, userId: verified.id };

    await credentialServices.findCredentialByUrl(payload)
    await credentialServices.insertCredential(payload);

    res.status(201).send("Credential Created!");

}
