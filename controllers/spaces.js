import Space from "../models/Space.js";

export const getSpaces = async (req, res) => {
  try {
    const spaces = await Space.find();
    res.json(spaces);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
