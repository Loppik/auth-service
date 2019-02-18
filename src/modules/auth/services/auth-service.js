const userRequest = require('../../user/db/user-db');
const crypto = require('../../../crypto');
const tokenService = require('../../token/services/token-service');
const tokenRequest = require('../../token/db/token-db');
const config = require('../../../configs/jwt');

exports.login = async (siteName, user) => {
  const u = await userRequest.getUserByEmail(siteName, user.email);
  if (u) {
    const isEqual = await crypto.compare(user.password, u.password);
    if (isEqual) {
      const accessToken = await tokenService.generateToken({ userId: u.user_id }, config.secretKey, config.expiresIn); // FIXME: copy-past
      const refreshToken = await tokenService.generateToken({ userId: u.user_id }, config.rsecretKey, config.rexpireIn);
      tokenRequest.addRefreshToken(siteName, u.user_id, refreshToken);
      return { accessToken, refreshToken };
    } else {
      return Promise.reject(new Error('Incorrect password'));
    }
  } else {
    return Promise.reject(new Error('No such email'));
  }
};

exports.registration = async (siteName, user) => {
  const u = await userRequest.getUserByEmail(siteName, user.email);
  if (u) {
    return Promise.reject(new Error('This e-mail already exist'))
  } else {
    return userRequest.addUser(siteName, { ...user, password: await crypto.createHash(user.password) });
  }
};

exports.refreshTokens = async (siteName, refreshToken) => {
  const decode = await tokenService.verifyToken(refreshToken, config.rsecretKey);
  if (decode) {
    if (await tokenService.checkRefreshToken(siteName, decode.userId, refreshToken)) {
      const newAccessToken = tokenService.generateToken({ userId: decode.userId }, config.secretKey, config.expiresIn); // FIXME: copy-past
      const newRefreshToken = tokenService.generateToken({ userId: decode.userId }, config.rsecretKey, config.rexpireIn);
      return { newAccessToken, newRefreshToken }
    } else {
      // FIXME: kick 
      return Promise.reject(new Error('Already used refresh token'));
    }
  } else {
    return Promise.reject(new Error('Refresh token expired'));
  }
};
