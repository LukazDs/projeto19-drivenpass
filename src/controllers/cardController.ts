import { ICardBodyReq } from "../types/utilTypes";
import { Request, Response } from "express";
import * as cardServices from "../services/cardServices";
import { Cards } from "@prisma/client";

export async function insertCard(req: Request, res: Response) {

    const card: ICardBodyReq = req.body;
    const { verified } = res.locals;

    await cardServices.insertCard(card, verified.id);

    res.status(201).send("Card Created!");

}

export async function getCardUser(_req: Request, res: Response) {

    const { verified } = res.locals;

    const cards: Cards[] = await cardServices.findCardByUserId(verified.id);

    res.status(200).send(cards);

}

export async function getCardUserById(req: Request, res: Response) {

    const { verified } = res.locals;
    const id: number = Number(req.params.id)

    const cards: Cards = await cardServices.findCardUserById(verified.id, id);

    res.status(200).send(cards);

}

export async function deleteCard(req: Request, res: Response) {

    const id: number = Number(req.params.id);
    const { verified } = res.locals;

    await cardServices.deleteCardUserById(id, verified.id);

    res.status(200).send("Cartão deletado com sucesso!");

}