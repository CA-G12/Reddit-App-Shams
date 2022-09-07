const bcrypt = require('bcrypt');
const e = require('express');
const { json } = require('express');
const { signInQuery } = require("../../database/queries");
const generateToken = require('../../helpers/AuthHelpers');
const GenericError = require('../../helpers/GenericError');
const signInSchema = require("../../validation/sign-in-validate");
const validate = require("../../validation/validator");

const signIn = (req, res) => {
  const isLogged = req.cookies.token;
  if (isLogged) {
    res.json({ message: "isLogged" })
  }
  const { email, password } = req.body;
  let user;

  validate(signInSchema, { email, password })
    .then(() => signInQuery(email))
    .then((details) => {
      user = details.rows[0];

      if (!user) {
        throw new GenericError(400, 'Please double check your password and email')
      }

      return bcrypt.compare(password, user.hashed)

    }).then((isPasswordMatched) => {
      if (!isPasswordMatched) {
        throw new GenericError(400, 'Please double check your password and email');
      } else {
        return generateToken({ id: user.id });
      }
    }).then((jwt) => {
      res.cookie('token', jwt, { httpOnly: true }).json({ message: 'Logged in successfully!', success: true, path: '/feed' })
    })

    .catch(err => res.json({ err: err }))
  // .catch((error) => res.status(error.status || 500)).json({ error: error.msg || 'something went wrong' })

};

module.exports = signIn;
