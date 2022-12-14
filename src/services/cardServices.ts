import dotenv from "dotenv";
import cryptr from "cryptr";
import { ICard, ICardBodyReq } from "../types/utilTypes";
import * as cardRepository from "../repositories/cardRepository";
import { Cards } from "@prisma/client";

dotenv.config();

async function encryptPassword(card: ICard) {

    const encryptCryptr = new cryptr(String(process.env.CRYPTR_KEY));
    const encryptedPassword: string = encryptCryptr.encrypt(card.password)

    card.password = encryptedPassword;
}

export async function insertCard(card: ICardBodyReq, userId: number) {

    const payload: ICard = { ...card, userId };
    await encryptPassword(payload);

    payload.expirationDate = new Date(payload.expirationDate);
    const cards = await cardRepository.findCard(payload);

    if (cards.length) {
        throw { code: "Conflict", message: "Cartão já cadastrado!" };
    }

    await cardRepository.insertCard(payload);

}

export async function findCardByUserId(userId: number) {

    return await cardRepository.findCardByUserId(userId);

}

export async function findCardUserById(userId: number, id: number) {

    const cards: Cards[] = await cardRepository.findCardUserById(userId, id);

    if (!cards.length) {
        throw { code: "NotFound", message: "Cartão não encontrado!" }
    }

    return <Cards> cards[0];

}

export async function deleteCardUserById(id: number, userId: number) {

    await findCardUserById(userId, id);
    await cardRepository.deleteCardUserById(id);

}