import mongoose from "mongoose";

const listSchema = new mongoose.Schema({
  title: { type: String, required: true },
  cards: [{ type: mongoose.Schema.Types.ObjectId, ref: "Card" }],
});

export default mongoose.model("List", listSchema);
