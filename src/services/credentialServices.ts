import "express-async-errors";
import dotenv from "dotenv";
import { ICredentials } from "../types/utilTypes";
import * as credentialRepository from "../repositories/credentialRepository";

dotenv.config();

export async function insertCredential(credential: ICredentials) {


    const payload: ICredentials = credential

    await credentialRepository.insertCredential(credential)

}