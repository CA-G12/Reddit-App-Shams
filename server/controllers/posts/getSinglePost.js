const { getSinglePostQuery } = require("../../database/queries");

const getSinglePost = (req, res) => {
  const { id } = req.params;
  getSinglePostQuery(id)
    .then(data => res.json(data.rows))
    .catch(() => res.status(500).json({ message: 'Internal Server Error' }))

}

module.exports = getSinglePost;