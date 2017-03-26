const jwt = require('jsonwebtoken');

const generateToken = user => jwt.sign({
  id: user.id,
  name: user.name,
  roleId: user.roleId,
}, process.env.JWTSECRET, { algorithm: process.env.JWTALGORITHM, expiresIn: '1h' });

module.exports = generateToken;
