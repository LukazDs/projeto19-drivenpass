import { ICredentials } from "../types/utilTypes";
import { prisma } from "../config/database";
import { Users } from "@prisma/client";

export async function insertCredential(credential: ICredentials) {

    await prisma.credentials.create({ data: credential })

}

export async function findUserByEmail(email: string) {

    return <Users>await prisma.users.findUnique({ where: { email } })

}
