import { ICard, ICardBodyReq } from "../types/utilTypes";
import * as cardRepository from "../repositories/cardRepository";

export async function insertCard(card: ICardBodyReq, userId: number) {

    const payload: ICard = { ...card, userId };

    payload.expirationDate = new Date(payload.expirationDate)

    const cards = await cardRepository.findCard(payload);

    if (cards.length) {
        throw { code: "Conflict", message: "Cartão já cadastrado!" };
    }

    await cardRepository.insertCard(payload);

}