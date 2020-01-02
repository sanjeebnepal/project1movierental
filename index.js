import express from "express";
import mongoose from "mongoose";
import env from "dotenv";

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

app.get("/", (req, res) => {
  return res.send("hello world");
});
app.listen(process.env.PORT, () =>
  console.log(`Listening to port ${process.env.PORT}`)
);
