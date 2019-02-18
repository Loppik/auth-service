const db = require('../../../pg');

exports.addRefreshToken = (siteName, user_id, refreshToken) => db.query(`UPDATE ${siteName} SET refresh_token = '${refreshToken}' WHERE user_id = ${user_id}`);