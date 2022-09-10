import "express-async-errors";
import dotenv from "dotenv";
import cryptr from "cryptr";
import * as credentialRepository from "../repositories/credentialRepository";
import { Credentials } from "@prisma/client";
import {
    ICredentials,
    ICredentialsBodyReq,
    ICredentialsFindWithUserId
} from "../types/utilTypes";


dotenv.config();

async function encryptPassword(credential: ICredentialsBodyReq) {

    const encryptCryptr = new cryptr(String(process.env.CRYPTR_KEY));
    const encryptedPassword: string = encryptCryptr.encrypt(credential.password)

    credential.password = encryptedPassword;
}

export async function insertCredential(credential: ICredentialsBodyReq, userId: number) {

    await encryptPassword(credential)

    const payload: ICredentials = { ...credential, userId };

    await credentialRepository.insertCredential(payload);

}

export async function findCredentialByUrl(credential: ICredentialsBodyReq, userId: number) {

    const payload: ICredentialsFindWithUserId = {
        url: credential.url,
        authorName: credential.authorName,
        title: credential.title,
        credentialName: credential.credentialName,
        label: credential.label,
        userId
    };

    const credentials: Credentials[] = await credentialRepository.findCredential(payload)

    if (credentials.length) {
        throw {
            code: "Conflict",
            message: "Erro usuário tentando cadastrar duas credenciais iguais"
        }
    }

    return credentials[0];

}
