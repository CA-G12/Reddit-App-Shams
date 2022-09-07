const { addPostQuery } = require("../../database/queries");

const addPost = (req, res) => {
  const { content, post_image } = req.body;
  const { id } = req.token;
  addPostQuery({ content, post_image, userId: id }).then(data => res.json({ message: 'post is added' }));
}

module.exports = addPost;