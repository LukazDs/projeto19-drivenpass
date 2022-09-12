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

function desencryptPassword(password: string) {

    const encryptCryptr = new cryptr(String(process.env.CRYPTR_KEY));
    const passwordDescrypt: string = encryptCryptr.decrypt(password)

    return passwordDescrypt;
}

export async function insertCredential(credential: ICredentialsBodyReq, userId: number) {

    await encryptPassword(credential)

    const payload: ICredentials = { ...credential, userId };

    await credentialRepository.insertCredential(payload);

}

export async function findCredential(credential: ICredentialsBodyReq, userId: number) {

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
            message: "Erro você está tentando cadastrar duas credenciais iguais"
        }
    }

    return credentials[0];

}

export async function findCredentialById(id: number, userId: number) {

    const credentials: Credentials[] = await credentialRepository.findCredentialById(id, userId);

    if (!credentials.length) {
        throw { code: "NotFound", message: "Credencial não encontrada!" }
    }

    credentials.map(v => { v.password = String(desencryptPassword(v.password)) })

    return credentials[0];

}

export async function findCredentialByUserId(userId: number) {

    const credentials: Credentials[] = await credentialRepository.findCredentialByUserId(userId);
    credentials.map(v => v.password = String(desencryptPassword(v.password)))

    return credentials;

}

export async function deleteCredentialById(id: number, userId: number) {

    const credentials: Credentials[] = await credentialRepository.findCredentialById(id, userId)

    if (!credentials.length) {
        throw { code: "NotFound", message: "Credencial não encontrada" }
    }

    await credentialRepository.deleteCredentialById(id);

}

