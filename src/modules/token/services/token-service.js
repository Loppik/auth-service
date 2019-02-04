const jwt = require('jsonwebtoken');
const config = require('../../../configs/jwt');

exports.generateToken = obj => {
  return new Promise((resolve, reject) => {
    jwt.sign(obj, config.secretKey, { expiresIn: config.expiresIn }, (err, token) => err ? (
      reject(new Error('Token generation error'))
    ) : (
      resolve(token)
    ));
  });
};
