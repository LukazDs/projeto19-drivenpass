import { INoteBodyReq } from "../types/utilTypes";
import { Request, Response } from "express";
import * as noteServices from "../services/noteServices";
import { Notes } from "@prisma/client";

export async function createNote(req: Request, res: Response) {

    const note: INoteBodyReq = req.body;
    const { verified } = res.locals;

    await noteServices.insertNote(note, verified.id)

    res.status(201).send("Note Created!");

}

export async function getNoteUser(_req: Request, res: Response) {

    const { verified } = res.locals;

    const notes: Notes[] = await noteServices.findNoteByUserId(verified.id);

    res.status(200).send(notes);

}

export async function getNoteUserById(req: Request, res: Response) {

    const id: number = Number(req.params.id)
    const { verified } = res.locals;

    const notes: Notes = await noteServices.findNoteUserById(verified.id, id);

    res.status(200).send(notes);

}

export async function deleteNote(req: Request, res: Response) {

    const id: number = Number(req.params.id);
    const { verified } = res.locals;

    await noteServices.deleteNoteById(id, verified.id );

    res.status(200).send("Nota deletada com sucesso!");

}
