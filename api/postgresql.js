/* eslint-disable consistent-return, no-console*/
const pg = require('pg');
const _ = require('lodash');
const pgConfig = require('./pg_config.js');

const Postgresql = (query, cb) => {
  const pool = new pg.Pool(pgConfig);
  pool.connect((err, client, done) => {
    if (err) {
      return console.log('CONNECTION ERROR:', err);
    }
    console.log('================= QUERY =================');
    console.log(query);
    console.log('=========================================');
    client.query(query, (queryError, result) => {
      done();
      if (queryError) {
        return console.log('QUERY ERROR', queryError);
      }
      cb(null, _.map(result.rows, row => _.mapKeys(row, (v, k) => _.camelCase(k))));
    });
  });
  pool.on('error', (err, client) => {
    console.error('idle client error', err.message, err.stack, client);
  });
};

module.exports = Postgresql;
