import * as authRepository from "../repositories/authRepository"
import { IUser } from "../types/utilTypes";

export async function insertUser(user: IUser) {

    await authRepository.insertUser(user);

}