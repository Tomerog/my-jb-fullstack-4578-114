import { NextFunction, Request, Response } from "express";
import Region from "../../models/region";
import Attraction from "../../models/attraction";

export async function getAttractionByRegion(
  req: Request<{ regionId }>,
  res: Response,
  next: NextFunction
) {
  try {
    const region = await Region.findByPk(req.params.regionId, {
      include: [Attraction],
    });
    res.json(region.attractions);
  } catch (error) {
    next(error);
  }
}

export async function add(
  req: Request<
    {},
    {},
    {
      name: string;
      description: String;
      regionId: string;
      priceAdult: number;
      priceChild: number;
    }
  >,
  res: Response,
  next: NextFunction
) {
  try {
    const newAttraction = await Attraction.create({ ...req.body });
    res.json(newAttraction);
  } catch (error) {
    next(error);
  }
}

export async function remove(
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) {
  try {
    const { id } = req.params;
    await Attraction.destroy({ where: { id } });
    res.json({ success: true });
  } catch (error) {
    next(error);
  }
}
