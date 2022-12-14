import { Request, Response } from "express";
import { IWifiBodyReq } from "../types/utilTypes";
import * as wifiServices from "../services/wifiServices";
import { Wifis } from "@prisma/client";

export async function insertWifi(req: Request, res: Response) {

    const wifi: IWifiBodyReq = req.body;
    const { verified } = res.locals;

    await wifiServices.insertWifi(wifi, verified.id)

    res.status(201).send("Wifi Created!");

}

export async function getWifiUser(_req: Request, res: Response) {

    const { verified } = res.locals;

    const wifis: Wifis[] = await wifiServices.findWifiByUserId(verified.id);

    res.status(200).send(wifis);

}

export async function getWifiUserById(req: Request, res: Response) {

    const id: number = Number(req.params.id)
    const { verified } = res.locals;

    const wifis: Wifis = await wifiServices.findWifiUserById(verified.id, id);

    res.status(200).send(wifis);

}

export async function deleteWifi(req: Request, res: Response) {

    const id: number = Number(req.params.id);
    const { verified } = res.locals;

    await wifiServices.deleteWifiUserById(id, verified.id );

    res.status(200).send("Nota deletada com sucesso!");

}
