import { Router, Request, Response } from "express";
import { RepoTagResponse } from "../models/repo";
import { lvData } from "../setup/jsondata";
import { parseItemIndex, returnFullJson } from "../shared/params";

const lvRouter = Router();

lvRouter.get("/", (_req: Request, res: Response) => {
  res.json(lvData);
});

lvRouter.get("/:index", (req: Request, res: Response) => {
  const itemIndex: number = parseItemIndex(req, res, lvData.length);

  const itemAtIndex: RepoTagResponse = lvData[itemIndex];
  returnFullJson(res, itemAtIndex);
});

export default lvRouter;
