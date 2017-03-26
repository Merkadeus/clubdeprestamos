const Mockgen = require('../mockgen.js');
const passwordHash = require('md5');
const pg = require('../../postgresql.js');
/**
 * Operations on /auth/login
 */
module.exports = {
  post: {
    200: (req, res, callback) => {
      const hashedPassword = passwordHash(req.payload.password);
      let query = 'SELECT * FROM users_tb ';
      query += 'JOIN login_tb ON login_tb.users_id=users_tb.id ';
      query += `WHERE users_tb.email='${req.payload.email}' AND login_tb.password='${hashedPassword}'`;
      pg(query, callback);
    },
    default: (req, res, callback) => {
      /**
       * Using mock data generator module.
       * Replace this by actual data for the api.
       */
      Mockgen().responses({
        path: '/auth/login',
        operation: 'post',
        response: 'default',
      }, callback);
    },
  },
};
