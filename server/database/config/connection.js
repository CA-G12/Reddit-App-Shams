require('dotenv').config();
const { Pool } = require('pg');

const {
  NODE_ENV, DATABASE_URL, DB_URL, TEST_DB,
} = process.env;
let connectionString = '';
let ssl = false;

switch (NODE_ENV) {
  case 'development':
    connectionString = DB_URL;
    break;
  case 'production':
    connectionString = DATABASE_URL;
    ssl = {
      rejectUnauthorized: false,
    };
    break;

  case 'test':
    connectionString = TEST_DB;
    break;
  default:
    throw new Error('The database url is invalid!');
}

const connection = new Pool({
  connectionString,
  ssl,
});

module.exports = connection;
