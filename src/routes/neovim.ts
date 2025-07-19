import { Router, Request, Response } from "express";
import { RepoTagResponse } from "../models/repo";
import { nvData } from "../setup/jsondata";

const nvRouter = Router();

nvRouter.get("/", (req: Request, res: Response) => {
  res.json(nvData);
});

nvRouter.get("/:index", (req: Request, res: Response) => {
  const itemIndex: number = parseInt(req.params.index);
  const itemAtIndex: RepoTagResponse = nvData[itemIndex];
  res.status(200).json(itemAtIndex);
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

export default nvRouter;
