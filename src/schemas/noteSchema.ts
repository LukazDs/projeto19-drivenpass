import joi from "joi";
import { INoteBodyReq } from "../types/utilTypes";

const noteSchema = joi.object<INoteBodyReq>({
    title: joi.string().max(50).required(),
    annotation: joi.string().max(1000).required()
})

export default noteSchema;
