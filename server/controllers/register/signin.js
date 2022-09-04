const bcrypt = require('bcrypt');
const { signInQuery } = require("../../database/queries");
const generateToken = require('../../helpers/AuthHelpers');
const signInSchema = require("../../validation/sign-in-validate");
const validate = require("../../validation/validator");


const signIn = (req, res) => {
  // console.log(req.body);
  // res.json({ message: 'hate life!' })
};

module.exports = signIn;
