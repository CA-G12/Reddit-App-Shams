const connection = require("../../config/connection");

const getSinglePostQuery = (postId) => connection.query('SELECT * from posts WHERE id =$1', [postId]);

module.exports = getSinglePostQuery;