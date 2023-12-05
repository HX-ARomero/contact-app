const { getContact } = require("../../controllers");

const getContactHandler = async (req, res) => {
  try {
    const { key } = req.query;
    const response = await getContact(key);
    // Lo siguiente depende de la respuesta que deseamos enviar:
    if (key && !response.length) {
      return res
        .status(404)
        .send({ message: `There are no matches for: ${key}` });
    }
    if (!response.length) {
      return res.status(404).send({ message: "There are no contacts" });
    }
    return res.status(200).json(response);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = getContactHandler;
