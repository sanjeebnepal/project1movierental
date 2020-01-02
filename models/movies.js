import mongoose, { Schema } from "mongoose";

let { ObjectId } = Schema.Types;

let movies = new Schema({
  title: {
    type: String,
    required: true
  },
  category: ObjectId,
  runTime: Number
});

export default mongoose.model("Movie", movies);
