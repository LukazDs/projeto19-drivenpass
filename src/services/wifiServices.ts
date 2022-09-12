import { IWifi, IWifiBodyReq } from "../types/utilTypes";
import * as wifiRepository from "../repositories/wifiRepository";

export async function insertWifi(wifi: IWifiBodyReq, userId: number) {

    const payload: IWifi = { ...wifi, userId };

    const wifis = await wifiRepository.findWifi(payload);

    if (wifis.length) {
        throw { code: "Conflict", message: "Wifi já cadastrado!" };
    }

    await wifiRepository.insertWifi(payload);

}