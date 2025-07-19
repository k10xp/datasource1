import { Router, Request, Response } from "express";
import { lvData } from "../setup/jsondata";

const lvRouter = Router();

lvRouter.get("/", (req: Request, res: Response) => {
  res.json(lvData);
});

export default lvRouter;
