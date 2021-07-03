const JOI = require('joi');



//TODO: create validation for all the post and patch method e.g createProduct, updateProduct, login, updatePassword.

//TODO: Basically any routes that takes information from the user should have it's own validation.

exports.registerValidation = (data) => {
  const schema = JOI.object({
    name: JOI.string().required().min(2).max(20),
    email: JOI.string().required().email(),
    role: JOI.string(),
    password: JOI.string().required().min(6).max(12),
  });

  return schema.validate(data);
};
