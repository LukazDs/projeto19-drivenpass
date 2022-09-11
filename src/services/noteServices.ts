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

// export async function findNoteUser(userId: number) {


//     await noteRepository.insertNote(userId);

// }