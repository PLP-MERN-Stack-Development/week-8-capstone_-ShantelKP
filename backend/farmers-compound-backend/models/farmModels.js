const mongoose = require("mongoose");

const farmSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: String,
  size: Number,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Farm = mongoose.model("Farm", farmSchema);

module.exports = Farm;
