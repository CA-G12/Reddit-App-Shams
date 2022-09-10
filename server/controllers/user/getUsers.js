const { getAllUsersQuery } = require("../../database/queries");

const getAllUsers = (req, res) => {
  getAllUsersQuery(req.body).then((result) => res.json({ users: result.rows }));
}

module.exports = getAllUsers;