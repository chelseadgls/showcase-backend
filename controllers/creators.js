import Creator from "../models/Creator.js";

export const getCreators = async (req, res) => {
  try {
    const creators = await Creator.find();
    res.json(creators);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
