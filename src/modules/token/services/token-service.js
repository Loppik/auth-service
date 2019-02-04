const jwt = require('jsonwebtoken');

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
