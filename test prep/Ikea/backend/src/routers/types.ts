import { Router } from "express";
import { getTypes } from "../controllers/types/types";

const typesRouter = Router();

typesRouter.get("/", getTypes);
export default typesRouter;
