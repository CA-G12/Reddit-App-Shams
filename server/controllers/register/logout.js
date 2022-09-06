const logout = (req, res) => {
  res.clearCookie('token').json({ path: '../' });
}

module.exports = logout;