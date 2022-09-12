import { Router } from "express";
import { deleteWifi, getWifiUser, getWifiUserById, insertWifi } from "../controllers/wifiController";
import { validateWifiBody } from "../middlewares/validateWifiSchema";
import validateToken from "../middlewares/validateToken";

export const wifiRouter = Router();

wifiRouter.post("/wifi", validateToken, validateWifiBody, insertWifi);
wifiRouter.get("/wifi", validateToken, getWifiUser);
wifiRouter.get("/wifi/:id", validateToken, getWifiUserById);
wifiRouter.delete("/wifi/:id", validateToken, deleteWifi);
