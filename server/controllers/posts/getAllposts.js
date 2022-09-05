const { showPostsQuery } = require("../../database/queries");

const getAllPosts = (req, res) => {
  showPostsQuery().then((data) => res.json(data.rows));
}

module.exports = getAllPosts;