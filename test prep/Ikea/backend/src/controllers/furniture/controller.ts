import { NextFunction, Request, Response } from "express";
import Furniture from "../../models/furniture";
import Type from "../../models/type";

export async function getFurniture(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const furnitures = await Furniture.findAll({
      include: [Type],
    });
    res.json(furnitures);
  } catch (e) {
    next(e);
  }
}
