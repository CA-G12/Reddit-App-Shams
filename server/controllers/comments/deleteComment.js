const { deleteCommentQuery } = require("../../database/queries");

const deleteComment = (req, res) => {
  const { id: comment_id } = req.params;

  deleteCommentQuery(comment_id)
    .then((data) => {
      if (data.rowCount) {
        res.status(200).json({
          message: "Comment is deleted successfully",
          data: data.rows[0],
        });
      }
    })
    .catch(() =>
      res.status(500).json({
        message: "Internal Server Error",
      })
    );
};

module.exports = deleteComment;
