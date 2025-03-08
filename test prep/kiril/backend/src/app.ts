import express, { json } from "express";
import config from "config";
import sequelize from "./db/sequelize";
import errorLogger from "./middlewares/error/error-logger";
import errorResponder from "./middlewares/error/error-responder";
import notFound from "./middlewares/not-found";
import cors from "cors";
import regionsRouter from "./routers/regions";
import attractionsRouter from "./routers/attractions";

const port = config.get<string>("app.port");
const name = config.get<string>("app.name");
const force = config.get<boolean>("sequelize.sync.force");

const app = express();

(async () => {
  await sequelize.sync({ force });

  app.use(cors());

  app.use(json());

  app.use("/regions", regionsRouter);
  app.use("/attractions", attractionsRouter);
  app.use(notFound);

  app.use(errorLogger);
  app.use(errorResponder);

  app.listen(port, () => console.log(`${name} started on port ${port}...`));
})();
