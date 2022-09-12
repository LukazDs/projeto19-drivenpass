import { IWifi, IWifiBodyReq } from "../types/utilTypes";
import * as wifiRepository from "../repositories/wifiRepository";
import cryptr from "cryptr";
import dotenv from "dotenv";

dotenv.config();

async function encryptPassword(wifi: IWifi) {

    const encryptCryptr = new cryptr(String(process.env.CRYPTR_KEY));
    const encryptedPassword: string = encryptCryptr.encrypt(wifi.password)

    wifi.password = encryptedPassword;
}

export async function insertWifi(wifi: IWifiBodyReq, userId: number) {

    const payload: IWifi = { ...wifi, userId };

    await encryptPassword(payload);

    await wifiRepository.insertWifi(payload);

}