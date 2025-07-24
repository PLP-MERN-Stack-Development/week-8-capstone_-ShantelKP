import Inventory from "../models/Inventory.js";

// @desc    Create a new inventory item
// @route   POST /api/inventory
export const createInventoryItem = async (req, res) => {
  const { itemName, quantity, category } = req.body;
  const item = new Inventory({
    itemName,
    quantity,
    category,
    user: req.user._id,
  });

  const savedItem = await item.save();
  res.status(201).json(savedItem);
};

// @desc    Get all inventory items for user
// @route   GET /api/inventory
export const getInventoryItems = async (req, res) => {
  const items = await Inventory.find({ user: req.user._id });
  res.json(items);
};

// @desc    Delete an inventory item
// @route   DELETE /api/inventory/:id
export const deleteInventoryItem = async (req, res) => {
  const item = await Inventory.findById(req.params.id);

  if (!item) {
    res.status(404);
    throw new Error("Inventory item not found");
  }

  if (item.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("Not authorized");
  }

  await item.deleteOne();
  res.json({ message: "Item removed" });
};
