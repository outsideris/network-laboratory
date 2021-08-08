const plugin = require('fastify-plugin');
const sensible = require('fastify-sensible');

module.exports = plugin(async function (fastify, opts) {
  fastify.register(sensible, {
    errorHandler: false,
  });
});
