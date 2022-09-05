const connection = require('../../config/connection');

const signInQuery = (email) => connection.query('SELECT id, username, password as hashed, image_url FROM users WHERE email = $1', [email]);

module.exports = signInQuery;