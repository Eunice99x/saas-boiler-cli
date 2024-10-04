import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { notFound } from "./middlewares/notFoundMiddleware";

const app = express();

dotenv.config();

const PORT = process.env.PORT ? process.env.PORT : 3000;
app.get("/", (req: Request, res: Response) => {
  res.send("saas-boiler-cli");
});

app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
  console.log(`am listening on PORT ${PORT}`);
});

app.use(notFound);
// app.use(errorHandler); i will add this later because i want the library to be simple
