import { Router, Request, Response } from "express";
import { RepoTagResponse } from "../models/repo";
import { lvData } from "../setup/jsondata";

const lvRouter = Router();

lvRouter.get("/", (req: Request, res: Response) => {
  const itemIndex: number = parseInt(req.params.index);
  const itemAtIndex: RepoTagResponse = lvData[itemIndex];
  res.status(200).json(itemAtIndex);
});

lvRouter.post("/", (req: Request, res: Response) => {
  const newLvEntry: RepoTagResponse = {
    name: req.body.name,
    zipball_url: req.body.zipball_url,
    commit: {
      sha: req.body.sha,
      url: req.body.url,
    },
    node_id: req.body.node_id,
  };

  lvData.push(newLvEntry);

  res.status(201).json(newLvEntry);
});

export default lvRouter;
