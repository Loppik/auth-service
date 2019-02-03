const router = require('express').Router();
const siteController = require('./controllers/site-controller');

router.post('/', siteController.addSite);

module.exports = router;