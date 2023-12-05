const { Op } = require("sequelize");
const { Contact } = require("../../db");

const getContact = async (key) => {
  if (key) {
    const foundContact = await Contact.findAll({
      where: {
        name: {
          [Op.substring]: key,
        },
      },
    });
    return foundContact;
  }
  const foundContact = await Contact.findAll({
    // Ordenar por el campo 'name' en orden ascendente:
    order: [["name", "ASC"]],
  });
  return foundContact;
};

module.exports = getContact;
