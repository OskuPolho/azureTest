import express, { Request, Response } from "express";
import { helloWorld } from "./testFile";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  const string = helloWorld();
  res.send("Hello World in typescript");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
