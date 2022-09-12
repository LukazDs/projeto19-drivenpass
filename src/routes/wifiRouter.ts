import { Router } from "express";
import { getWifiUser, insertWifi } from "../controllers/wifiController";
import { validateWifiBody } from "../middlewares/validateWifiSchema";
import validateToken from "../middlewares/validateToken";


export const wifiRouter = Router();

wifiRouter.post("/wifi", validateToken, validateWifiBody, insertWifi);
wifiRouter.get("/wifi", validateToken, getWifiUser);
