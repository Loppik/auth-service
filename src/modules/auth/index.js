const router = require('express').Router();

const authController = require('./controllers/auth-controller');

router.post('/reg', authController.registration)

module.exports = router;
