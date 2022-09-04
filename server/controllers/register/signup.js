/* eslint-disable camelcase */
const bcrypt = require('bcrypt');
const { signUpQuery, selectUserByEmail } = require('../../database/queries');
const validate = require('../../validation/validator');
const signupSchema = require('../../validation/sign-up.validate');
const GenericError = require('../../helpers/GenericError');

const signUp = (req, res) => {
  const {
    username, email, password, image_url, confirm_password,
  } = req.body;

  validate(signupSchema, {
    username, email, password, confirm_password, image_url,
  }).then(() => selectUserByEmail(email))
    .then((data) => {
      if (data.rowCount) {
        const { username, email } = data.rows[0];
        if (username === req.body.username) throw new GenericError(400, 'Username is used before')
        if (email === req.body.email) throw new GenericError(400, 'Email already exists');
      } else {
        return bcrypt.hash(password, 10);
      }
    }).then((hashed) => signUpQuery({
      username, email, password: hashed, image_url,
    })).then((userData) => res.send(userData))
    .catch((error) => {
      if (error.name === 'ValidationError') res.status(400).json({
        status: 400,
        msg: error.message
      });
      return res.status(500).json(error);
    });
};

module.exports = signUp;
