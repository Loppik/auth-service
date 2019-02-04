const userRequest = require('../../user/db/user-db');
//const bcrypt = require('bcryptjs');

exports.registration = async (siteName, user) => {
  const u = (await userRequest.getUserByEmail(siteName, user.email)).rows[0];
  if (u) {
    return Promise.reject(new Error('This e-mail already exist'))
  } else {
    //userRequest.addUser({ ...user, password: await bcrypt.hash(user.password, 10) })
    return userRequest.addUser(siteName, { ...user, password: user.password })
  }
};
