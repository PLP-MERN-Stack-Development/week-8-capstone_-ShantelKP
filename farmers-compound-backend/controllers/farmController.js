const Farm = require("../models/farmModels.js");
const createFarm = async (req, res) => {
  const { name, location, size } = req.body;

  const farm = await Farm.create({
    name,
    location,
    size,
    user: req.user._id,
  });

  res.status(201).json(farm);
};

const getUserFarms = async (req, res) => {
  const farms = await Farm.find({ user: req.user._id });
  res.json(farms);
};

module.exports = { createFarm, getUserFarms };
