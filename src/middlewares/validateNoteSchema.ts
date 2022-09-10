import { Request, Response, NextFunction } from "express";
import noteSchema from "../schemas/noteSchema";

export async function validateNoteBody(req: Request, res: Response, next: NextFunction) {

    const validation = noteSchema.validate(req.body)

    if (validation.error) {

        return res.status(422).send("Nota inválida!")

    }

    next()

};
