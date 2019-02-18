const router = require('express').Router();

router.use('/site', require('./site'));
router.use('/:siteName', require('./auth'));
router.use('/:siteName', require('./access'));

module.exports = router;