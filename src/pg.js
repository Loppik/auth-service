const { Client } = require('pg');
const config = require('./configs/db');

const client = new Client({
  user: config.user,
  host: config.host,
  database: config.database,
  password: config.password,
});
client.connect();
console.log('pg connected');

module.exports = client;