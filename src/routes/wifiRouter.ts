import { Router } from "express";
import { getWifiUser, getWifiUserById, insertWifi } from "../controllers/wifiController";
import { validateWifiBody } from "../middlewares/validateWifiSchema";
import validateToken from "../middlewares/validateToken";

export const wifiRouter = Router();

wifiRouter.post("/wifi", validateToken, validateWifiBody, insertWifi);
wifiRouter.get("/wifi", validateToken, getWifiUser);
wifiRouter.get("/wifi/:id", validateToken, getWifiUserById);
