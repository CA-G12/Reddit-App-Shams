const connection = require("../../config/connection");

const getVotesQuery = (id) => connection.query('SELECT * FROM votes WHERE id = $1', [id]);

module.exports = getVotesQuery;