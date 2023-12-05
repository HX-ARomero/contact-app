const { Op } = require("sequelize");
const { Contact } = require("../../db");

const putContact = async ({ id, name, address, phone, email, favorite }) => {
  // Verificamos que NO exista otro contacto con el nombre indicado:
  const foundByName = await Contact.findOne({
    where: {
      name: name,
      id: { [Op.not]: id },
    },
  });
  if (foundByName) {
    throw new Error(`There is a contact with the name: ${name}`);
  }
  const foundContact = await Contact.findByPk(id);
  // Verificamos que exista contacto con el id indicado:
  if (!foundContact) {
    throw new Error(`There is not a contact with the id ${id}`);
  }
  // Creamos contacto con los nuevos valores:
  const newValues = {
    name: name !== undefined ? name : foundContact.name,
    address: address !== "" ? address : foundContact.address,
    phone: phone !== undefined ? phone : foundContact.phone,
    email: email !== undefined ? email : foundContact.email,
    favorite: favorite !== undefined ? favorite : foundContact.favorite,
  };
  // Actualizamos los datos:
  await Contact.update(newValues, { where: { id } });
  const allContacts = await Contact.findAll({
    order: [["name", "ASC"]],
  });

  return allContacts;
};

module.exports = putContact;
