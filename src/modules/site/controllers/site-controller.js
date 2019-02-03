const siteRequest = require('../db/site-db');

exports.addSite = (req, res) => {
  siteRequest.addSite(req.body.site.name);
  res.send({});
}