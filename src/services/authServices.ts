import * as authRepository from "../repositories/authRepository"
import { IUser } from "../types/utilTypes";
import "express-async-errors";

export async function insertUser(user: IUser) {

    await authRepository.insertUser(user);

}

export async function findUserByEmail(email: string) {

    const user = await authRepository.findUserByEmail(email);

    if(user) {
        throw {code: "Conflict", "message": "Usuário já Cadastrado!"}
    }

}

