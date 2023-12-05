const deleteContactHandler = require("./contacts/deleteContactHandler.js");
const getContactHandler = require("./contacts/getContactHandler.js");
const postContactHandler = require("./contacts/postContactHandler.js");
const putContactHandler = require("./contacts/putContactHandler.js");

module.exports = {
  deleteContactHandler,
  getContactHandler,
  postContactHandler,
  putContactHandler,
};

// Handler
//   Recibe y desestructura información (Desde "req")
//   Ejecuta al controlador (y le envía la información necesaria)
//   Maneja error (Mediante try/catch)
//   Da la respuesta (mediante "res")

// Controller
//   Interactúa con el exterior (BBDD ó API externa)
//   Retorna un error o datos
