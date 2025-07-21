import mongoose from "mongoose";

const boardSchema = new mongoose.Schema({
  name: { type: String, required: true },
  lists: [{ type: mongoose.Schema.Types.ObjectId, ref: "List" }],
});

export default mongoose.model("Board", boardSchema);
