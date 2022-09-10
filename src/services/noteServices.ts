import { INote, INoteBodyReq } from "../types/utilTypes";
import * as noteRepository from "../repositories/noteRepository"

export async function insertNote(note: INoteBodyReq, userId: number) {

    const payload: INote = { ...note, userId };

    await noteRepository.insertNote(payload);

}