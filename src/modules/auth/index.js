const router = require('express').Router();

const authController = require('./controllers/auth-controller');

router
  .post('/login', authController.login)
  .post('/reg', authController.registration)

module.exports = router;
