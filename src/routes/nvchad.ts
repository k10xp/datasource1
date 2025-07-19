import { Router, Request, Response } from "express";
import { RepoTagResponse } from "../models/repo";
import { nvcData } from "../setup/jsondata";
import { parseItemIndex, returnFullJson } from "../shared/params";

const nvcRouter = Router();

nvcRouter.get("/", (_req: Request, res: Response) => {
  res.status(200).json(nvcData);
});

nvcRouter.get("/:index", (req: Request, res: Response) => {
  const itemIndex: number = parseItemIndex(req, res, nvcData.length);

  const itemAtIndex: RepoTagResponse = nvcData[itemIndex];
  returnFullJson(res, itemAtIndex);
});

nvcRouter.delete("/:index", (req: Request, res: Response) => {
  const itemIndex: number = parseItemIndex(req, res, nvcData.length);

  nvcData.splice(itemIndex, 1);
  res.status(204).send();
});

export default nvcRouter;
