const crypto = require('crypto');
const config = require('./configs/crypto');

exports.createHash = text => {
  return new Promise((resolve, reject) => {
    const hmac = crypto.createHmac(config.algorithm, config.secretKey);
    hmac.setEncoding('hex');
    hmac.end(text, () => {
      resolve(hmac.read());
    });
  })
}
