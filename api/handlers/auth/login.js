const dataProvider = require('../../data/auth/login');
const generateToken = require('../users_token');
const Promise = require('bluebird');
const _ = require('lodash');
const Boom = require('boom');

module.exports = {
  post: (req, reply, next) => {
    const status = 200;
    const provider = Promise.promisify(dataProvider.post['200']);
    provider(req, reply)
      .then((data) => {
        if (data.length) {
          _.assign(data[0], {
            token: generateToken(data[0]),
          });
          data[0] = _.omit(data[0], ['password']);
          const response = {
            responses: {
              results: data,
            },
          };
          req.totalCount = data.length ? response.responses.results.length : 0;
          reply(data && response.responses).code(status);
        } else {
          reply(Boom.unauthorized('Invalid password or email!'));
        }
      })
      .catch((err) => {
        next(err);
      });
  },
};
