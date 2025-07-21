import mongoose from "mongoose";

const cardSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
});

export default mongoose.model("Card", cardSchema);
