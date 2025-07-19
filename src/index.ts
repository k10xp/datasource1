import express, { Request, Response } from "express";
import { connection } from "./models/envvar";

const app = express();
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Datasource #1");
});

// app.use("/repos",repoRoutes)

app.listen(connection.port, connection.host, () => {
  console.log(
    `Server is running on port ${connection.host}:${connection.port}`,
  );
});
