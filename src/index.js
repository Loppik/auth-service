const app = require('express')();
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./configs/server');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(cors());

const { sequelize } = require('./sequelize');

const router = require('./modules');
app.use(router);

app.listen(config.port, () => {
  console.log(`Server listening on http://${config.host}:${config.port}`);
})

module.exports = app;