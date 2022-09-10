import { ICredentials, ICredentialsFind } from "../types/utilTypes";
import { prisma } from "../config/database";

export async function insertCredential(credential: ICredentials) {

    await prisma.credentials.create({ data: credential })

}

export async function findCredential(credential: ICredentialsFind) {

    return await prisma.credentials.findMany({ where: credential })

}

export async function findCredentialById(id: number) {

    return await prisma.credentials.findMany({ where: { id } })

}

export async function findCredentialByUserId(userId: number) {

    return await prisma.credentials.findMany({ where: { userId } })

}
