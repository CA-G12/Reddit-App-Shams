const connection = require('../../config/connection');

const showPostsQuery = () => connection.query('SELECT username, image_url, posts.id, content, post_date, post_image FROM posts JOIN users on users.id = posts.user_id ORDER BY posts.id');

module.exports = showPostsQuery;