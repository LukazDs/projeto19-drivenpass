import "express-async-errors";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import * as authRepository from "../repositories/authRepository"
import { IUser } from "../types/utilTypes";

dotenv.config()

export async function insertUser(user: IUser) {

    const digits = Number(process.env.PASSWORD_DIGIT_BCRYPT);
    const passwordHash = bcrypt.hashSync(user.password, digits);

    const payload: IUser = { email: user.email, password: passwordHash }

    await authRepository.insertUser(payload);

}

export async function findUserByEmail(email: string) {

    const user = await authRepository.findUserByEmail(email);

    if (user) {
        throw { code: "Conflict", "message": "Usuário já Cadastrado!" }
    }

}

