import { prisma } from "../config/database";
import { INote } from "../types/utilTypes";

export async function insertNote(note: INote) {

    await prisma.notes.create({ data: note });

}

export async function findNote(note: INote) {

    return await prisma.notes.findMany({ where: note })

}

export async function findNoteById(userId: number, id: number) {

    return await prisma.notes.findMany({ where: { userId, id } })

}
