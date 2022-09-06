const connection = require("../../config/connection");

const addCommentQuery = ({ content, user_id, post_id }) =>
  connection.query('INSERT INTO comments(content, user_id, post_id) VALUES($1, $2, $3)', [content, user_id, post_id]);

module.exports = addCommentQuery;