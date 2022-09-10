import { INoteBodyReq } from "../types/utilTypes";
import { Request, Response } from "express";
import * as noteServices from "../services/noteServices";

export async function createNote(req: Request, res: Response) {

    const note: INoteBodyReq = req.body;
    const { verified } = res.locals;

    await noteServices.insertNote(note, verified.id)

    res.status(201).send("Note Created!");

}