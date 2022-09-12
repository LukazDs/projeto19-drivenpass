import { prisma } from "../config/database";
import { ICard } from "../types/utilTypes";

export async function insertCard(card: ICard) {

    await prisma.cards.create({ data: card });

}

export async function findCard(card: ICard) {

    return await prisma.cards.findMany({ where: card });

}