import { Request, Response, NextFunction } from "express";
import wifiSchema from "../schemas/wifiSchema";

export async function validateWifiBody(req: Request, res: Response, next: NextFunction) {

    const validation = wifiSchema.validate(req.body);

    if (validation.error) {

        return res.status(422).send("Informações inseridas com formato inválido!");

    }

    next()

};
