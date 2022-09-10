import { Request, Response, NextFunction } from "express";
import credentialSchema from "../schemas/credentialSchema";

export async function validateCredentialBody (req: Request, res: Response, next: NextFunction) {

    const validation = credentialSchema.validate(req.body)

    if(validation.error) {

        return res.status(422).send("Credencial inválida!")
        
    }

    next()

};