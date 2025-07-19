import { Router, Request, Response } from "express";
import { RepoTagResponse } from "../models/repo";
import { nvData } from "../setup/jsondata";
import { parseItemIndex, returnFullJson } from "../shared/params";

const nvRouter = Router();

nvRouter.get("/", (_req: Request, res: Response) => {
  res.status(200).json(nvData);
});

nvRouter.get("/:index", (req: Request, res: Response) => {
  const itemIndex: number = parseItemIndex(req, res, nvData.length);

  const itemAtIndex: RepoTagResponse = nvData[itemIndex];
  returnFullJson(res, itemAtIndex);
});

//todo: want start-end
nvRouter.get("/:start/:end", (req: Request, res: Response) => {
  const startIndex: number = parseInt(req.params.start, 10) - 1;
  const endIndex: number = parseInt(req.params.end, 10);

  if (
    isNaN(startIndex) ||
    isNaN(endIndex) ||
    startIndex < 0 ||
    endIndex > nvData.length ||
    startIndex >= endIndex - 1
  ) {
    res.status(400).json({ error: "Out of range" });
    return;
  }

  const itemSlice: RepoTagResponse[] = nvData.slice(startIndex, endIndex);
  res.json(itemSlice);
});

nvRouter.post("/", (req: Request, res: Response) => {
  const newNvEntry: RepoTagResponse = {
    name: req.body.name,
    zipball_url: req.body.zipball_url,
    commit: {
      sha: req.body.sha,
      url: req.body.url,
    },
    node_id: req.body.node_id,
  };

  nvData.push(newNvEntry);

  res.status(201).json(newNvEntry);
});

export default nvRouter;
