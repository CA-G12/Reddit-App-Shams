const getUserPostsQuery = require("../../database/queries/posts/getUserPostsQuery");

const getUSerPost = (req, res) => {
  console.log(req.token);
};

module.exports = getUSerPost;