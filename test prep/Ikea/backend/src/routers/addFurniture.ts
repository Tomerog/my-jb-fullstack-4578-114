import { Router } from "express";
import validation from "../middlewares/validation";
import { newFurnitureValidator } from "../controllers/add/validator";
import { addFurniture } from "../controllers/add/controller";

const addRouter = Router();

addRouter.post("/", validation(newFurnitureValidator), addFurniture);
export default addRouter;
