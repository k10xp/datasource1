import { Router, Request, Response } from "express";
import { nvData } from "../setup/jsondata";

const nvRouter = Router();

nvRouter.get("/", (req: Request, res: Response) => {
  res.json(nvData);
});

export default nvRouter;
