const connection = require('../../config/connection');

const userProfileQuery = (userId) => connection.query('SELECT * FROM users WHERE id = $1', [userId]);

module.exports = userProfileQuery;