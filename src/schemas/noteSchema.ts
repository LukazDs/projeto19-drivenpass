import joi from "joi";
import { INoteBodyReq, IUser } from "../types/utilTypes";

const noteSchema = joi.object<INoteBodyReq>({
    title: joi.string().required(),
    annotation: joi.string().min(10).required()
})

export default userSchema;
