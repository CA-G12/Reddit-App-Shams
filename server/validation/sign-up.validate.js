const joi = require('joi');

const signupSchema = joi.object({
  username: joi.string().min(3).max(30)
    .required(),
  email: joi.string().min(8).max(100).email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
  password: joi.string().alphanum().required(),
  confirm_password: joi.ref('password'),
  image_url: joi.string().required(),
});

module.exports = signupSchema;
