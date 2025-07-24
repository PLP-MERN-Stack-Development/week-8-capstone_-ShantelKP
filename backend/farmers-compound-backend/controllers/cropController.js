import Crop from "../models/cropModel.js";

// Create a new crop
export const createCrop = async (req, res) => {
  const {
    name, type, plantedDate, harvestDate, quantity, unit, farm
  } = req.body;

  const crop = await Crop.create({
    name,
    type,
    plantedDate,
    harvestDate,
    quantity,
    unit,
    farm,
    user: req.user._id,
  });

  res.status(201).json(crop);
};

// Get all crops for logged-in user
export const getUserCrops = async (req, res) => {
  const crops = await Crop.find({ user: req.user._id }).populate("farm", "name");
  res.json(crops);
};
