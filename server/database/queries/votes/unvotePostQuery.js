const connection = require("../../config/connection");

const unvotePostQuery = (id) => connection.query('DELETE FROM votes WHERE id = $1', [id]);

module.exports = unvotePostQuery;