import { Request, Response } from "express";
import * as credentialServices from "../services/credentialServices";
import { ICredentials } from "../types/utilTypes";

export async function createCredential(req: Request, res: Response) {

    const credential: ICredentials = req.body

    // await authServices.findUserByEmail(user.email)
    await credentialServices.insertCredential(credential)

    res.status(201).send("Credential Created!");

}