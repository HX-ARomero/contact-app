const { postContact } = require("../../controllers");

const postContactHandler = async (req, res) => {
  try {
    const { name, address, phone, email } = req.body;
    const response = await postContact({ name, address, phone, email });
    return res.status(203).json(response);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = postContactHandler;
