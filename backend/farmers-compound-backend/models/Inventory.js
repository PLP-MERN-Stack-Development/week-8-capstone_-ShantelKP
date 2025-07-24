import mongoose from "mongoose";

const inventorySchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 0,
  },
  category: {
    type: String,
    enum: ["Seed", "Tool", "Fertilizer", "Pesticide", "Other"],
    default: "Other",
  },
  dateAdded: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  }
}, { timestamps: true });

const Inventory = mongoose.model("Inventory", inventorySchema);

export default Inventory;
