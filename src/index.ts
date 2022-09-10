import express from "express";
import cors from "cors";
import "express-async-errors";
import dotenv from "dotenv";
import { authRouter } from "./routes/authRouter";
import errorHandler from "./middlewares/errorHandler";
import { credentialRouter } from "./routes/credentialRouter";
import { noteRouter } from "./routes/noteRouter";

dotenv.config();

const app = express();
app.use(express.json(), cors());

app.use(authRouter);
app.use(credentialRouter);
app.use(noteRouter);
app.use(errorHandler);

const PORT: number = Number(process.env.PORT) || 5000;

app.listen(PORT, () => { console.log(`Server running in the ${PORT}`) })
