const { putContact } = require("../../controllers");

const putContactHandler = async (req, res) => {
  try {
    const { id, name, address, phone, email, favorite } = req.body;
    const response = await putContact({
      id,
      name,
      address,
      phone,
      email,
      favorite,
    });
    return res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = putContactHandler;
