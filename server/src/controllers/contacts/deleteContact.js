const { Contact } = require("../../db");

const deleteContact = async (id) => {
  const foundContact = await Contact.findByPk(id);
  if (!foundContact)
    throw new Error(`There is not a contact with the id ${id}`);
  await foundContact.destroy();
  const allContacts = await Contact.findAll({
    order: [["name", "ASC"]],
  });
  return allContacts;
};

module.exports = deleteContact;
