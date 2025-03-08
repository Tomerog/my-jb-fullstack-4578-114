import { Router } from "express";
import { getFurniture } from "../controllers/furniture/controller";

const router = Router();

router.get("/", getFurniture);
export default router;
