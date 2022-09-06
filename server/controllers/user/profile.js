const { userProfileQuery } = require("../../database/queries");

const userProfile = (req, res) => {
  const { id } = req.token;
  userProfileQuery(id).then(data => {
    res.status(201).json({
      statusCode: 201,
      message: "Got all user info",
      data: data.rows[0]
    });
  })
    .catch((err) => res.status(500).json({ message: 'Internal Server Error' }))

}

module.exports = userProfile;