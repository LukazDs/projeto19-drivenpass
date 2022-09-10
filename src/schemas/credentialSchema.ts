import joi from "joi";
import { ICredentials } from "../types/utilTypes";

const credentialSchema = joi.object<ICredentials>({
    url: joi.string().uri().required(),
    authorName: joi.string().required(),
    password: joi.string().min(10).required(),
    title: joi.string().required(),
    credentialName: joi.string().required(),
    label: joi.string().required()
})

export default credentialSchema;
