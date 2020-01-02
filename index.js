import express from "express";
import mongoose from "mongoose";
import env from "dotenv";
import routes from "./routes";
env.config();

let app = express();

mongoose
  .connect(process.env.MONGOOSEURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("connected");
  })
  .catch(err => {
    console.log(err);
  });

app.use(express.json());

routes(app);

app.listen(process.env.PORT, () =>
  console.log(`Listening to port ${process.env.PORT}`)
);
