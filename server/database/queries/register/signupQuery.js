const connection = require('../../config/connection');

const signUpQuery = ({
  username, email, password, image_url,
}) => connection.query('INSERT INTO users(username, email, password, image_url) VALUES($1, $2, $3, $4);', [username, email, password, image_url]);

module.exports = signUpQuery;
