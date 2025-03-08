import { NextFunction, Request, Response } from "express";
import Category from "../../models/category";
import Product from "../../models/product";

export async function getAll(req: Request, res: Response, next: NextFunction) {
  const category = await Category.findAll();
  res.json(category);
}
