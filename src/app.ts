import * as express from "express";
import { sequlize } from "./database";
import { middlewareLogger } from "./middleware/loggers";
import { userRoute } from "./users/users";
import { userRouter } from "./routes/users";
import bodyParser = require("body-parser");

const app = express();

//app.get("/", (req, res) => res.send("I'm back!!"));

app.use(bodyParser.json());
app.use(middlewareLogger);
app.get("/", middlewareLogger, userRoute);
app.use("/users", userRouter);

app.listen(8080, () => {
  console.log(`App runing at http://localhost:8080`);
  sequlize
    .authenticate()
    .then(async () => {
      console.log("database connected");

      try {
        await sequlize.sync({ force: false });
      } catch (error) {
        console.log(error.message);
      }
    })
    .catch((e: any) => {
      console.log(e.message);
    });
});
