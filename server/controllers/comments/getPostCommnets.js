const { getPostCommentsQuery } = require("../../database/queries");

const getPostComments = (req, res) => {
  const { id: post_id } = req.params;

  getPostCommentsQuery(post_id)
    .then(data => res.json({
      message: 'All comments are sent',
      data: data.rows,
      length: data.rows.length,
    }))
}

module.exports = getPostComments;