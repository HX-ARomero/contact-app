const { Router } = require("express");
const { postContactHandler, deleteContactHandler, getContactHandler, putContactHandler } = require("../handlers");

const contactRouter = Router();

contactRouter.get("/", getContactHandler);
contactRouter.post("/", postContactHandler);
contactRouter.put("/", putContactHandler);
contactRouter.delete("/:id", deleteContactHandler);

module.exports = contactRouter;