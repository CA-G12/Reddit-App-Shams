const connection = require('../../config/connection');

const votePostQuery = ({ id, user_id, post_id }) =>
  connection.query('INSERT INTO votes(id, post_id, user_id) VALUES($1, $2, $3)', [id, user_id, post_id]);

module.exports = votePostQuery;