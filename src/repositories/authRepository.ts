import { IUser } from "../types/utilTypes";
import { prisma } from "../config/database";
import { Users } from "@prisma/client";

export async function insertUser(user: IUser) {

    await prisma.users.create({ data: user });

}

export async function findUserByEmail(email: string) {

    return <Users> await prisma.users.findUnique({ where: { email } });

}
