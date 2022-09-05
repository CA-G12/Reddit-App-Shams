const connection = require('../../config/connection');

const showPostsQuery = () => connection.query('SELECT username, image_url, content, post_date, post_image FROM posts JOIN users on users.id = posts.user_id');

module.exports = showPostsQuery;