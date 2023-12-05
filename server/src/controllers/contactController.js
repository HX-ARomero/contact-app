const { Contact } = require("../db");
const validate = require("../utils/validate");

const postContact = async ({ name, address, phone, email }) => {
  const message = validate({ name, address, phone, email });
  if(message) {
    throw new Error(message);
  }
  await Contact.create({ name, address, phone, email });
  const allContacts = await Contact.findAll({
    order: [['name', 'ASC']]
  });
  return allContacts;
}

const deleteContact = async (id) => {
  const foundContact = await Contact.findByPk(id);
  if(!foundContact) throw new Error(
    `There is not a contact with the id ${id}`
  );
  await foundContact.destroy();
  const allContacts = await Contact.findAll({
    order: [['name', 'ASC']]
  });
  return allContacts;
}

module.exports = {
  postContact,
  deleteContact
}