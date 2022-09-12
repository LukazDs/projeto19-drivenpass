import joi from "joi";
import { ICardBodyReq } from "../types/utilTypes";

const cardSchema = joi.object<ICardBodyReq>({
    number: joi.number().required(),
    nameHolderCard: joi.string().required(),
    securityCode: joi.number().min(3).max(4).required(),
    expirationDate: joi.date().required(),
    password: joi.string().length(6).required(),
    isVirtual: joi.boolean(),
    typeCard: joi.valid("Credito", "Debito", "CreditoDebito").required(),
    title: joi.string().required(),
    authorName: joi.string().required(),
    label: joi.string().required()
})

export default cardSchema;
