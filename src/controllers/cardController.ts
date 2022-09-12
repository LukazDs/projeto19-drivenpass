import { ICardBodyReq } from "../types/utilTypes";
import { Request, Response } from "express";
import * as cardServices from "../services/cardServices";

export async function insertCard(req: Request, res: Response) {

    const card: ICardBodyReq = req.body;
    const { verified } = res.locals;

    await cardServices.insertCard(card, verified.id);

    res.status(201).send("Card Created!");

}

export async function getCardUser(_req: Request, res: Response) {

    const { verified } = res.locals;

    const cards = await cardServices.findCardByUserId(verified.id);

    res.status(200).send(cards);

}

export async function getCardUserById(req: Request, res: Response) {

    const { verified } = res.locals;
    const id: number = Number(req.params.id)

    const cards = await cardServices.findCardUserById(id, verified.id);

    res.status(200).send(cards);

}