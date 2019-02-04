const crypto = require('crypto');
const config = require('./configs/crypto');

const createHash = text => {
  return new Promise((resolve, reject) => {
    const hmac = crypto.createHmac(config.algorithm, config.secretKey);
    hmac.setEncoding('hex');
    hmac.end(text, () => {
      resolve(hmac.read());
    });
  })
}

const compare = (text, comparedHashText) => {
  return new Promise((resolve, reject) => {
    createHash(text)
    .then((hashText) => {
      if (hashText === comparedHashText) {
        resolve(true);
      } else {
        resolve(false);
      }
    })
  });
}

module.exports = { createHash, compare };
