const router = require('express').Router();

router.use('/site', require('./site'));
router.use('/:siteName', require('./auth'));

module.exports = router;