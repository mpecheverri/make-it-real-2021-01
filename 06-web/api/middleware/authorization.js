const usersAuthorization = (req, res, next) => {
  const { username, authUsername } = req.body;
  if (username === authUsername) {
    next();
  } else {
    res.status(500).json({ message: 'unauthorized' });
  }
};

module.exports = { usersAuthorization };
