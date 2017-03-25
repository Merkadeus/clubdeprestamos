const dataProvider = require('../../data/users/{id}.js');
const Promise = require('bluebird');

module.exports = {
  patch: (req, res, next) => {
    const status = 202;
    const provider = Promise.promisify(dataProvider.patch['202']);
    provider(req, res)
      .then((data) => {
        const response = {
          responses: data.responses,
        };
        req.totalCount = data.length ? response.responses.length : 0;
        res(data && response.responses).code(status);
      })
      .catch((err) => {
        next(err);
      });
  },
  get: (req, res, next) => {
    const status = 200;
    const provider = Promise.promisify(dataProvider.get['200']);
    provider(req, res)
      .then((data) => {
        const response = {
          responses: data.responses,
        };
        req.totalCount = data.length ? response.responses.length : 0;
        res(data && response.responses).code(status);
      })
      .catch((err) => {
        next(err);
      });
  },
};
