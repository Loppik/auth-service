const jwt = require('jsonwebtoken');
const tokenRequest = require('../db/token-db');

exports.generateToken = (obj, secretKey, expiresIn) => {
  return new Promise((resolve, reject) => {
    jwt.sign(obj, secretKey, { expiresIn }, (err, token) => err ? (
      reject(new Error('Token generation error'))
    ) : (
      resolve(token)
    ));
  });
};

exports.verifyToken = (token, secretKey) => {
  return jwt.verify(token, secretKey, (err, decoder) => {
    if (!err) {
      return decoder;
    }
  });
};

exports.checkRefreshToken = async (siteName, user_id, refreshToken) => {
  const refTokenDB = await tokenRequest.getRefreshToken(siteName, user_id);
  console.log(refTokenDB);
  return refTokenDB === refreshToken;
}
