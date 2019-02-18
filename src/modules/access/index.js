const router = require('express').Router();
const accessController = require('./controllers/access-controller');

router.get('/access', accessController.checkAccess);

module.exports = router;
