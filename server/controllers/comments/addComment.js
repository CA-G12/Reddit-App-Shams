const { addCommentQuery } = require("../../database/queries");

const addComment = (req, res) => {
  const { id: post_id } = req.params;
  const { content } = req.body;
  const { id: user_id } = req.token;

  addCommentQuery({ content, user_id, post_id }).then((data) => {
    if (data.rowCount) {
      res.status(200).json({
        message: "Comment is added",
        data: data.rows[0]
      })
    }
  }).catch(() => res.status(500)
    .json({ message: 'Internal Server Error' }))
}

module.exports = addComment;