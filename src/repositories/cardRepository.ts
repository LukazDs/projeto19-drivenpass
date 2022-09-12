import { Cards } from "@prisma/client";
import { prisma } from "../config/database";
import { ICard } from "../types/utilTypes";

export async function insertCard(card: ICard) {

    await prisma.cards.create({ data: card });

}

export async function findCard(card: ICard) {

    return await prisma.cards.findMany({ where: card });

}

export async function findCardByUserId(userId: number) {

    return <Cards[]>await prisma.cards.findMany({ where: { userId } })

}

export async function findCardUserById(userId: number, id: number) {

    return <Cards[]>await prisma.cards.findMany({ where: { userId, id } })

}

export async function deleteCardUserById(id: number) {

    await prisma.cards.delete({ where: { id } })

}