import "express-async-errors";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as authRepository from "../repositories/authRepository";
import { IUser } from "../types/utilTypes";
import { Users } from "@prisma/client";

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

export async function findUserByEmailAndPassword(user: IUser) {

    const register = await authRepository.findUserByEmail(user.email);

    if (!register) {
        throw { code: "Unauthorized", message: "Email ou password inválidos!" }
    }

    if (!bcrypt.compareSync(user.password, register?.password as string)) {

        throw { code: "Unauthorized", message: "Email ou password inválidos!" }

    }

    return <Users>register;

}


export async function getToken(user: Users) {

    const JWT_PASSWORD: string = String(process.env.JWT_KEY);
    const TIME: string = String(process.env.JWT_TIME)

    const token: string = jwt.sign(user, JWT_PASSWORD, { expiresIn: TIME });

    return token;

}
