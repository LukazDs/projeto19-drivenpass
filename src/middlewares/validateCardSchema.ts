import { Request, Response, NextFunction } from "express";
import cardSchema from "../schemas/cardSchema";

export async function validateCardBody (req: Request, res: Response, next: NextFunction) {

    const validation = cardSchema.validate(req.body)

    if(validation.error) {

        return res.status(422).send("Cartão inválido!")
        
    }

    next()

};