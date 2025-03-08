import { NextFunction, Request, Response } from "express";

import Region from "../../models/region";

export async function getAll(req: Request, res: Response, next: NextFunction) {
  const region = await Region.findAll();
  res.json(region);
}
