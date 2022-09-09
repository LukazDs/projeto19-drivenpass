import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { authRouter } from "./routes/authRouter";

dotenv.config();

const app = express();
app.use(express.json(), cors());

app.use(authRouter)

const PORT: number = Number(process.env.PORT) || 5000;

app.listen(PORT, () => { console.log(`Server running in the ${PORT}`) })
