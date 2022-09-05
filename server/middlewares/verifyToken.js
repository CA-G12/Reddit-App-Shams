const { verify } = require("jsonwebtoken");
const { SECRET_KEY } = process.env;


const verifyToken = (req, res, next) => {
  const { token } = req.cookies;
  verify(token, SECRET_KEY, (err, decoded) => {
    if (err) { res.status(302).json({ message: 'Token is not found' }) } else {
      req.token = decoded;
      next();
    }
  })
};

module.exports = verifyToken;