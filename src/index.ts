import express, { Request, Response } from "express";
import { connection } from "./setup/envvar";
import nvRouter from "./routes/neovim";
import lvRouter from "./routes/lazyvim";
import nvcRouter from "./routes/nvchad";

const app = express();
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Datasource #1");
});

app.use("/neovim", nvRouter);
app.use("/lazyvim", lvRouter);
app.use("/nvchad", nvcRouter);

app.listen(connection.port, connection.host, () => {
  console.log(
    `Server is running on port ${connection.host}:${connection.port}`,
  );
});
