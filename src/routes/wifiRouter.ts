import { Router } from "express";
import * as wifiController from "../controllers/wifiController";
import { validateWifiBody } from "../middlewares/validateWifiSchema";
import validateToken from "../middlewares/validateToken";

export const wifiRouter = Router();

wifiRouter.post("/wifi", validateToken, validateWifiBody, wifiController.insertWifi);
wifiRouter.get("/wifi", validateToken, wifiController.getWifiUser);
wifiRouter.get("/wifi/:id", validateToken, wifiController.getWifiUserById);
wifiRouter.delete("/wifi/:id", validateToken, wifiController.deleteWifi);
