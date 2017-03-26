module.exports = {
  development: {
    client: 'pg',
    connection: {
      user: 'postgres',
      database: 'clubdeprestamoscr_db',
      password: 'randall2017',
      host: 'localhost',
      port: 5433,
      max: 10,
      idleTimeoutMillis: 30000,
    },
  },
};
