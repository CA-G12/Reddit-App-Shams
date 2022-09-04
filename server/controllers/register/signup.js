/* eslint-disable camelcase */
const bcrypt = require('bcrypt');
const { signUpQuery, selectUserByEmail } = require('../../database/queries');
const validate = require('../../validation/validator');
const signupSchema = require('../../validation/sign-up.validate');

const signUp = (req, res) => {
  const {
    username, email, password, image_url, confirm_password,
  } = req.body;

  validate(signupSchema, {
    username, email, password, confirm_password, image_url,
  }).then(() => selectUserByEmail(email))
    .then((data) => res.send(data))

    .then(() => bcrypt.hash(password, 10).then((hashed) => signUpQuery({
      username, email, hashed, image_url,
    })))
    .then((userData) => console.log(userData))
    .then((data) => res.json(data))
    .catch((error) => res.status(error.status || 500)
      .json({ error: error.msg || 'Something Went Wrong' }));
};

module.exports = signUp;
