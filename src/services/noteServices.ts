import { INote, INoteBodyReq } from "../types/utilTypes";
import * as noteRepository from "../repositories/noteRepository"

export async function insertNote(note: INoteBodyReq, userId: number) {

    const payload: INote = { ...note, userId };

    const notes = await noteRepository.findNote(payload);

    if (notes.length) {
        throw { code: "Conflict", message: "Nota já cadastrada!" };
    }

    await noteRepository.insertNote(payload);

}

export async function findNoteByUserId(userId: number) {

    return await noteRepository.findNoteByUserId(userId);

}

export async function findNoteUserById(userId: number, id: number) {

    const notes = await noteRepository.findNoteById(userId, id);

    if (!notes.length) {
        throw { code: "NotFound", message: "Nota não encontrada!" }
    }

    return notes[0];

}

export async function deleteNoteById(id: number, userId: number) {

    await findNoteUserById(userId, id);
    await noteRepository.deleteNoteUserById(id);

}