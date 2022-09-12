import express from "express";
import cors from "cors";
import "express-async-errors";
import bodyparser from "body-parser";
import dotenv from "dotenv";
import { authRouter } from "./routes/authRouter";
import errorHandler from "./middlewares/errorHandler";
import { credentialRouter } from "./routes/credentialRouter";
import { noteRouter } from "./routes/noteRouter";
import { cardRouter } from "./routes/cardsRouter";
import { wifiRouter } from "./routes/wifiRouter";

dotenv.config();

const app = express();
app.use(express.json(), cors());
app.use(bodyparser.urlencoded({extended : true}));

app.use(authRouter);
app.use(credentialRouter);
app.use(cardRouter);
app.use(noteRouter);
app.use(wifiRouter);

app.use(errorHandler);

const PORT: number = Number(process.env.PORT) || 5000;

app.listen(PORT, () => { console.log(`Server running in the ${PORT}`) })
