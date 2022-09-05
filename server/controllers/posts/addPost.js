const { addPostQuery } = require("../../database/queries");

const addPost = (req, res) => {
  console.log('here');
  const { id } = req.token;
  addPostQuery(req.body, id).then(data => res.json({ message: 'post is added' }));
}

module.exports = addPost;