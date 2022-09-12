import { Request, Response } from "express";
import { IWifiBodyReq } from "../types/utilTypes";
import * as wifiServices from "../services/wifiServices";

export async function insertWifi(req: Request, res: Response) {

    const wifi: IWifiBodyReq = req.body;
    const { verified } = res.locals;

    await wifiServices.insertWifi(wifi, verified.id)

    res.status(201).send("Wifi Created!");

}