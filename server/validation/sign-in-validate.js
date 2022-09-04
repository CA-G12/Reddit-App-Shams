const joi = require('joi');

const signInSchema = joi.object({
  email: joi.string().required(),
  password: joi.string().alphanum().required(),
});

module.exports = signInSchema;