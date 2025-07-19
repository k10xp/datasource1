import { Router, Request, Response } from "express";
import { RepoTagResponse } from "../models/repo";
import { lvData } from "../setup/jsondata";
import { parseItemIndex, returnFullJson } from "../shared/params";

const lvRouter = Router();

lvRouter.get("/", (_req: Request, res: Response) => {
  res.status(200).json(lvData);
});

lvRouter.get("/:index", (req: Request, res: Response) => {
  const itemIndex: number = parseItemIndex(req, res, lvData.length);

  const itemAtIndex: RepoTagResponse = lvData[itemIndex];
  returnFullJson(res, itemAtIndex);
});

lvRouter.put("/:index", (req: Request, res: Response) => {
  const itemIndex: number = parseItemIndex(req, res, lvData.length);

  lvData[itemIndex] = {
    name: req.body.name,
    zipball_url: req.body.zipball_url,
    commit: {
      sha: req.body.sha,
      url: req.body.url,
    },
    node_id: req.body.node_id,
  };
  res.status(200).json(lvData[itemIndex]);
});

export default lvRouter;
