import "express-async-errors";
import dotenv from "dotenv";
import cryptr from "cryptr";
import { ICredentials, ICredentialsBodyReq } from "../types/utilTypes";
import * as credentialRepository from "../repositories/credentialRepository";

dotenv.config();

export async function insertCredential(credential: ICredentialsBodyReq, userId: number) {

    const encryptCryptr = new cryptr(String(process.env.CRYPTR_KEY));

    const encryptedPassword: string = encryptCryptr.encrypt(credential.password)

    credential.password = encryptedPassword;

    const payload: ICredentials = { ...credential, userId };

    await credentialRepository.insertCredential(payload);

}

export async function findCredentialByUrl(credential: ICredentialsBodyReq, userId: number) {

    const payload: ICredentials = { ...credential, userId };

    return await credentialRepository.findCredential(payload);

}