const db = require('../../../pg');

exports.getUserByEmail = async (siteName, email) => (await db.query(`SELECT * FROM ${siteName} WHERE email='${email}'`)).rows[0];

exports.addUser = (siteName, user) => db.query(`INSERT INTO ${siteName} (email, password) VALUES ('${user.email}', '${user.password}')`);