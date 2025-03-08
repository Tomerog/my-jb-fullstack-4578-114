import { Sequelize } from "sequelize-typescript";
import config from "config";

import Region from "../models/region";
import Attraction from "../models/attraction";

const logging = config.get<boolean>("sequelize.logging") ? console.log : false;

const sequelize = new Sequelize({
  models: [Attraction, Region],
  dialect: "mysql",
  ...config.get("db"),
  logging,
});

export default sequelize;
