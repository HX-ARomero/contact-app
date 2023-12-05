const regexEmail = /\S+@\S+\.\S+/;

const validate = (product) => {
  const { name, address, phone, email } = product;
  if (!name) {
    return "Name required";
  }
  if (!address) {
    return "Address required";
  }
  if (!address) {
    return "Address required";
  }
  if (!phone) {
    return "Phone required";
  }
  if (!email) {
    return "Email required";
  }
  if (name && name.length < 2) {
    return "Name must be at least two characters";
  }
  if (name && name.length > 100) {
    return "Name no longer than one hundred characters";
  }
  if (email && !regexEmail.test(email)) {
    return "Email must be a valid email";
  }
  return;
};

module.exports = validate;
