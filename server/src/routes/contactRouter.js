const { Router } = require("express");
const { postContactHandler, deleteContactHandler } = require("../handlers/contactController");
const contactRouter = Router();

contactRouter.post("/", postContactHandler);
contactRouter.delete("/:id", deleteContactHandler);

module.exports = contactRouter;