const regexEmail = /\S+@\S+\.\S+/;

const validate = (contact) => {
  const { name, address, phone, email } = contact;
  if(!name) return "Name required";
  if(!email) return "Email required";
  if(email && !regexEmail.test(email)) return "Must be an email";
  return;
}

// console.log(
//   validate(
//     { 
//       name: "Name",
//       email: "a@b.com"
//     }
//   )
// )

module.exports = validate;