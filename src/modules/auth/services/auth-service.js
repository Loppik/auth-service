const userRequest = require('../../user/db/user-db');
const crypto = require('../../../crypto');
//const bcrypt = require('bcryptjs');

exports.registration = async (siteName, user) => {
  const u = (await userRequest.getUserByEmail(siteName, user.email)).rows[0];
  if (u) {
    return Promise.reject(new Error('This e-mail already exist'))
  } else {
    return userRequest.addUser(siteName, { ...user, password: await crypto.createHash(user.password) });
  }
};
