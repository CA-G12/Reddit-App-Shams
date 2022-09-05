const connection = require('../../config/connection');

const deletePostQuery = (id) => connection.query('DELETE * from posts WHERE id = $1', [id]);

module.exports = deletePostQuery;