//* Recibe información
//* Desestructura Información
//* Ejecuta al controlador (pasa info)
//* Maneja error
//* Da la respuesta

const { postContact, deleteContact } = require("../controllers/contactController");

const postContactHandler = async (req, res) => {
  try {
    const { name, address, phone, email } = req.body;
    const response = await postContact(
      { name, address, phone, email }
    );
    return res.status(203).json(response);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

const deleteContactHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await deleteContact(id);
    return res.status(200).json(response);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

module.exports = {
  postContactHandler,
  deleteContactHandler
}