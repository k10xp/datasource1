import { Router, Request, Response } from "express";
import { nvcData } from "../setup/jsondata";

const nvcRouter = Router();

nvcRouter.get("/", (req: Request, res: Response) => {
  res.json(nvcData);
});

export default nvcRouter;
