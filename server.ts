import express, { Request, Response } from "express";
import { helloWorld } from "./testFile";
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
  const string = helloWorld();
  res.send("Hello World in typescript");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
