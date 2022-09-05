const connection = require('../../config/connection');

const deletePostQuery = (id) => connection.query('DELETE FROM posts WHERE id = $1', [id]);

module.exports = deletePostQuery;