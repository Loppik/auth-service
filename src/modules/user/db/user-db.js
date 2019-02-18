const db = require('../../../pg');

exports.getUserByEmail = (siteName, email) => db.query(`SELECT * FROM ${siteName} WHERE email='${email}'`);

exports.addUser = (siteName, user) => db.query(`INSERT INTO ${siteName} (email, password) VALUES ('${user.email}', '${user.password}')`);