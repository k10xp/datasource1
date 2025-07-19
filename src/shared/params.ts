import { Request, Response } from "express";
import { RepoTagResponse } from "../models/repo";

export function parseItemIndex(
  req: Request,
  res: Response,
  itemLength: number,
): number {
  const itemIndex: number = parseInt(req.params.index);

  if (itemIndex < 0 || itemIndex > itemLength || isNaN(itemIndex)) {
    res.status(404).json({ message: "Entered index out of range" });
  }

  return itemIndex;
}

export function returnFullJson(res: Response, itemAtIndex: RepoTagResponse) {
  res.status(200).json(itemAtIndex);
}
