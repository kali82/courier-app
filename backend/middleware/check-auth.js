const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const accessToken = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(accessToken, process.env.tokenSecret);
    req.userId = decodedToken.userId;
    next();
  } catch (error) {
    res
      .status(401)
      .json({ message: 'Autoryzacja użytkownika nie powiodła się.' });
  }
};
