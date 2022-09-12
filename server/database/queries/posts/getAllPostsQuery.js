const connection = require('../../config/connection');

const showPostsQuery = () => connection.query
  ('SELECT username, image_url, posts.id, posts.user_id, content, post_date, post_image FROM posts JOIN users on users.id = posts.user_id ORDER BY posts.id');

module.exports = showPostsQuery;

// to_char(post_date,'YYYY-MM-DD at HH:MI:SS') as post_date