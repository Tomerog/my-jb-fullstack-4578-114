import Joi from "joi";

export const newFurnitureValidator = Joi.object({
  typeId: Joi.string().uuid().required(),
  dimension: Joi.string().required(),
  color: Joi.string().required(),
  price: Joi.number().required(),
});
