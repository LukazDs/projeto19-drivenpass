import { prisma } from "../config/database";
import { IWifi } from "../types/utilTypes";

export async function insertWifi(wifi: IWifi) {

    await prisma.wifis.create({ data: wifi });

}

export async function findWifi(wifi: IWifi) {

    return await prisma.wifis.findMany({ where: wifi });

}

export async function findWifiByUserId(userId: number) {

    return await prisma.wifis.findMany({ where: { userId } });

}

export async function findWifiById(userId: number, id: number) {

    return await prisma.wifis.findMany({ where: { userId, id } })

}