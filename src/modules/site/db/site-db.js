const db = require('../../../pg');

exports.addSite = siteName => db.query(`CREATE TABLE ${siteName} (user_id SERIAL, email VARCHAR(50) UNIQUE NOT NULL, password VARCHAR(50) NOT NULL, refresh_token VARCHAR(200))`);