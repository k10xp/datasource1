import { Router, Request, Response } from "express";
import { RepoTagResponse } from "../models/repo";
import { nvcData } from "../setup/jsondata";

const nvcRouter = Router();

nvcRouter.get("/", (req: Request, res: Response) => {
  const itemIndex: number = parseInt(req.params.index);
  const itemAtIndex: RepoTagResponse = nvcData[itemIndex];
  res.status(200).json(itemAtIndex);
});

export default nvcRouter;
