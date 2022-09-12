import { ICardBodyReq } from "../types/utilTypes";
import { Request, Response } from "express";
import * as cardServices from "../services/cardServices";

export async function insertCard(req: Request, res: Response) {

    const card: ICardBodyReq = req.body;
    const { verified } = res.locals;

    await cardServices.insertCard(card, verified.id);

    res.status(201).send("Card Created!");

}