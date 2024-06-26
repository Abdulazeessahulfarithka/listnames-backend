import mongoose from "mongoose";

const nameSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
export default mongoose.model("name", nameSchema);
