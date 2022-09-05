const { deletePostQuery } = require("../../database/queries");

const deletePost = (req, res, next) => {
  const { id } = req.params;
  deletePostQuery(id).then(result => res.json("post deleted successfully")).catch((err) => next(err));
};

module.exports = deletePost;