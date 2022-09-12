const getUserPostsQuery = require("../../database/queries/posts/getUserPostsQuery");

const getUSerPost = (req, res) => {
  const { id } = req.token;
  const { idParams } = req.params;
  if (idParams) {
    getUserPostsQuery(idParams).then(result => console.log(result.rows));
  } else {
    getUserPostsQuery(id).then(result => res.json(result.rows));
  }
};

module.exports = getUSerPost;