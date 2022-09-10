import { ICredentials } from "../types/utilTypes";
import { prisma } from "../config/database";
import { Credentials } from "@prisma/client";

export async function insertCredential(credential: ICredentials) {

    await prisma.credentials.create({ data: credential })

}

export async function findCredential(credential: ICredentials ) {

    return await prisma.credentials.findMany({ where: credential })

}
