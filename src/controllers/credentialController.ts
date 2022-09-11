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

export async function getCredentialUser(_req: Request, res: Response) {

    const { verified } = res.locals;

    const credentials = await credentialServices.findCredentialByUserId(verified.id);

    res.status(200).send(credentials);

}

export async function getCredentialById(req: Request, res: Response) {

    const id: number = Number(req.params.id);
    const { verified } = res.locals;

    const credentials = await credentialServices.findCredentialById(id, verified.id);

    res.status(200).send(credentials);

}

export async function deleteCredential(req: Request, res: Response) {

    const id: number = Number(req.params.id);
    const { verified } = res.locals;

    await credentialServices.findCredentialById(id, verified.id)
    await credentialServices.deleteCredentialById(id, verified.id );

    res.status(200).send("Credencial deletada com sucesso!");

}
