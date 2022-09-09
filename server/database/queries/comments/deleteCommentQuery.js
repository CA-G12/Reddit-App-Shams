const connection = require("../../config/connection");

const deleteCommentQuery = (id) => connection.query('DELETE FROM comments WHERE id = $1 RETURNING *', [id]);

module.exports = deleteCommentQuery;