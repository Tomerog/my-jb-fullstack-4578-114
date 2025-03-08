import { NextFunction, Request, Response } from "express";
import Furniture from "../../models/furniture";
import Type from "../../models/type";

export async function getTypes(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const types = await Type.findAll({});
    res.json(types);
  } catch (e) {
    next(e);
  }
}
