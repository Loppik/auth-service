const tokenService = require('../../token/services/token-service');
const config = require('../../../configs/jwt');

exports.checkAccess = (req, res) => {
  const accessToken = req.headers.authorization;
  if (accessToken) {
    tokenService.verifyToken(accessToken, config.secretKey)
      .then((decode) => { res.send('User with id = ', decode.userId); })
      .catch((err) => { res.status(401); res.send({ err: err.name }) })
  } else {
    res.send('No access token');
  }
}