import { Request, Response } from "express";
import * as authServices from "../services/authServices"
import { IUser } from "../types/utilTypes";

export async function createUser(req: Request, res: Response) {

    const user: IUser = req.body

    await authServices.findUserByEmail(user.email)
    await authServices.insertUser(user)

    res.status(201).send("User Created!")

}
