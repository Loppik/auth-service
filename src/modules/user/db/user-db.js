const db = require('../../../pg');

exports.getUserByEmail = (siteName, email) => {
  const s = `SELECT * FROM ${siteName} WHERE email='${email}'`;
  return db.query(s);
}

exports.addUser = (siteName, user) => db.query(`INSERT INTO ${siteName} (email, password) VALUES ('${user.email}', '${user.password}')`);