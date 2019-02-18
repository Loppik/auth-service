const db = require('../../../pg');

exports.addRefreshToken = (siteName, user_id, refreshToken) => db.query(`UPDATE ${siteName} SET refresh_token = '${refreshToken}' WHERE user_id = ${user_id}`);

exports.getRefreshToken = async (siteName, user_id) => (await db.query(`SELECT refresh_token FROM ${siteName} WHERE user_id = ${user_id}`)).rows[0];