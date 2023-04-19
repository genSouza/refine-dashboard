import Property from "../mongodb/models/property.js";
import User from "../mongodb/models/user.js";

const getAllProperties = async (req, res) => {
  try {
    const properties = await Property.find();
    res.status(200).json(properties);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getPropertyById = async (req, res) => {
  const { id } = req.params;
  try {
    const property = await Property.findById(id);
    res.status(200).json(property);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createProperty = async (req, res) => {
  const property = req.body;
  const newProperty = new Property(property);
  try {
    await newProperty.save();
    res.status(201).json(newProperty);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const deleteProperty = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No property with id: ${id}`);
  await Property.findByIdAndRemove(id);
  res.json({ message: "Property deleted successfully." });
};

const updateProperty = async (req, res) => {
  const { id } = req.params;
  const { title, description, price, location, image } = req.body;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No property with id: ${id}`);
  const updatedProperty = {
    title,
    description,
    price,
    location,
    image,
    _id: id,
  };
  await Property.findByIdAndUpdate(id, updatedProperty, { new: true });
  res.json(updatedProperty);
};

export {
  getAllProperties,
  getPropertyById,
  createProperty,
  updateProperty,
  deleteProperty,
};
