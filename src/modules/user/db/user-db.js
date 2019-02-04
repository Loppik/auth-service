const db = require('../../../pg');

exports.getUserByEmail = (siteName, email) => {
  const s = `SELECT * FROM ${siteName} WHERE email='${email}'`;
  console.log(s);
  return db.query(s);
}

exports.addUser = (siteName, user) => db.query(`INSERT INTO ${siteName} (email, password) VALUES ('${user.email}', '${user.password}')`);