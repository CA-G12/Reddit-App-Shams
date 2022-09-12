const connection = require('../../config/connection');

const getUserPostsQuery = (id) => {
  return connection.query('SELECT users.email, users.username, users.image_url, posts.id, posts.content, posts.post_date, posts.user_id, posts.post_image FROM users JOIN posts ON users.id = posts.user_id WHERE users.id = $1', [id])
};

module.exports = getUserPostsQuery;
