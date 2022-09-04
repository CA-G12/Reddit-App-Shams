const connection = require('../../config/connection');

const selectUserByEmail = (email) => connection.query('SELECT * FROM users WHERE email = $1', [email]);

module.exports = selectUserByEmail;
