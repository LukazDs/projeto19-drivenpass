import "express-async-errors";
import dotenv from "dotenv";
import { ICredentials, ICredentialsBodyReq } from "../types/utilTypes";
import * as credentialRepository from "../repositories/credentialRepository";

dotenv.config();

export async function insertCredential(credential: ICredentials) {

    await credentialRepository.insertCredential(credential);

}

export async function findCredentialByUrl(credential: ICredentials) {

    return await credentialRepository.findCredential(credential);

}