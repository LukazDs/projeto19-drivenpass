import { Role } from "@prisma/client";
import joi from "joi";
import { ICardBodyReq } from "../types/utilTypes";

const cardSchema = joi.object<ICardBodyReq>({
    number: joi.number().required(),
    nameHolderCard: joi.string().required(),
    securityCode: joi.number().min(3).required(),
    password: joi.string().required(),
    isVirtual: joi.bool().required(),
    typeCard: joi.string().valid(Role.Credito, Role.Debito, Role.CreditoDebito).required(),
    expirationDate: joi.date().required()
    
})

export default cardSchema;
