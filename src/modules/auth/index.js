const router = require('express').Router();

const authController = require('./controllers/auth-controller');

router
  .post('/login', authController.login)
  .post('/reg', authController.registration)
  .get('/refreshTokens/:refreshToken', authController.refreshTokens)

module.exports = router;
