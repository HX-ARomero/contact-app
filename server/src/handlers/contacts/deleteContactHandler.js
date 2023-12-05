const { deleteContact } = require("../../controllers");

const deleteContactHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await deleteContact(id);
    return res.status(200).json(response);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = deleteContactHandler;