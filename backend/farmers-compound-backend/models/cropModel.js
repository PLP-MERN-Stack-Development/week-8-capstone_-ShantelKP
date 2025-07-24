import mongoose from "mongoose";

const cropSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: String, // e.g., vegetable, grain, fruit
  plantedDate: Date,
  harvestDate: Date,
  quantity: Number,
  unit: String, // e.g., kg, tons, bags
  farm: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Farm",
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
}, { timestamps: true });

const Crop = mongoose.model("Crop", cropSchema);
export default Crop;
