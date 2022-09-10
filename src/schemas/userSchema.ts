import joi from "joi";
import { IUser } from "../types/utilTypes";

const userSchema = joi.object<IUser>({
    email: joi.string().email().required(),
    password: joi.string().min(10).required()
})

export default userSchema;
