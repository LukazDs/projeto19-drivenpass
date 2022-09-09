import { IUser } from "../types/utilTypes";
import { prisma } from "../config/database";

export async function insertUser(user: IUser) {

    await prisma.users.create({ data: user })

}