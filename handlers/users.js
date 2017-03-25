const dataProvider = require('../data/users.js');
const Promise = require('bluebird');

module.exports = {
  get: (req, reply, next) => {
    const status = 200;
    const provider = Promise.promisify(dataProvider.get[200]);
    provider(req, reply)
      .then((data) => {
        const response = {
          results: data,
        };
        req.totalCount = data.length ? response.results.length : 0;
        reply(data && response.results.responses).code(status);
      })
      .catch((err) => {
        next(err);
      });
  },
  post: (req, reply, next) => {
    const status = 201;
    const provider = Promise.promisify(dataProvider.post['201']);
    provider(req, reply)
      .then((data) => {
        const response = {
          results: data[0],
        };
        req.totalCount = data.length ? response.responses.length : 0;
        reply(data && response.results.responses).code(status);
      })
      .catch((err) => {
        next(err);
      });
  },
};
