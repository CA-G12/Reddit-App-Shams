const joi = require('joi');

const signInSchema = joi.object({
  email: joi.string().required(),
  password: joi.string().required(),
});

module.exports = signInSchema;