import { NextFunction, Request, Response } from "express";
import Furniture from "../../models/furniture";

export async function addFurniture(
  req: Request<
    {},
    {},
    { typeId: string; dimension: string; color: string; price: number }
  >,
  res: Response,
  next: NextFunction
) {
  try {
    const newFurniture = await Furniture.create(req.body);
    res.json(newFurniture);
  } catch (e) {
    next(e);
  }
}
