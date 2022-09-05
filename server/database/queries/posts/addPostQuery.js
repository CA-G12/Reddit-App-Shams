const connection = require('../../config/connection');

const addPostQuery = ({ content, post_image }, user_id) => connection.query('INSERT INTO posts(content, post_image, user_id) VALUES($1, $2, $3) RETURNING *', [content, post_image, user_id]);

module.exports = addPostQuery;