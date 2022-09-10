const connection = require('../../config/connection');

const getAllUsersQuery = () => connection.query('select users.id, users.image_url, users.username from users;');

module.exports = getAllUsersQuery;