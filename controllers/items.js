import Item from "../models/Item.js";

export const getItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
