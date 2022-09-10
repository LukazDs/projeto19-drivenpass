import { ICredentials, ICredentialsFind } from "../types/utilTypes";
import { prisma } from "../config/database";

export async function insertCredential(credential: ICredentials) {

    await prisma.credentials.create({ data: credential })

}

export async function findCredential(credential: ICredentialsFind ) {

    console.log(await prisma.credentials.findMany({ where: credential }))

    return await prisma.credentials.findMany({ where: credential })

}
