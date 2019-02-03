const router = require('express').Router();

router.use('/site', require('./site'));

module.exports = router;