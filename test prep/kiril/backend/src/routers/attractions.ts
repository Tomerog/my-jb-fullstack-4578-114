import { Router } from "express";
import paramsValidation from "../middlewares/params-validation";
import {
  add,
  getAttractionByRegion,
  remove,
} from "../controllers/attractions/controller";

const router = Router();

router.get("/:regionId", getAttractionByRegion);
router.post("/", add);
router.delete("/:id", remove);

export default router;
