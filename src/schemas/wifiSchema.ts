import joi from "joi";
import { IWifiBodyReq } from "../types/utilTypes";

const wifiSchema = joi.object<IWifiBodyReq>({
    networkName: joi.string().required(),
    password: joi.string().required(),
    title: joi.string().required(),
    label: joi.string().required(),
    name: joi.string().required()
})

export default wifiSchema;