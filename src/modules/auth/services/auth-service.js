const userRequest = require('../../user/db/user-db');
const crypto = require('../../../crypto');

exports.login = async (siteName, user) => {
  const u = (await userRequest.getUserByEmail(siteName, user.email)).rows[0];
  if (u) {
    const isEqual = await crypto.compare(user.password, u.password);
    if (isEqual) {
      return 'token';
    } else {
      return Promise.reject(new Error('Incorrect password'));
    }
  } else {
    return Promise.reject(new Error('No such email'));
  }
};

exports.registration = async (siteName, user) => {
  const u = (await userRequest.getUserByEmail(siteName, user.email)).rows[0];
  if (u) {
    return Promise.reject(new Error('This e-mail already exist'))
  } else {
    return userRequest.addUser(siteName, { ...user, password: await crypto.createHash(user.password) });
  }
};
