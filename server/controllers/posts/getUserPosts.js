const getUserPostsQuery = require("../../database/queries/posts/getUserPostsQuery");

const getUSerPost = (req, res) => {
  const { id } = req.token;
  getUserPostsQuery(id).then(result => res.json(result.rows));
};

module.exports = getUSerPost;