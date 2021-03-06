const path = require('path');
const AutoLoad = require('fastify-autoload');

module.exports = async function (fastify, opts) {
  if (process.env.ROLE === 'leader') {
    console.log('Server started as leader');
  } else {
    console.log('Server started as follower');
  }
  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: { ...opts },
  });

  // This loads all plugins defined in routes
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: { ...opts },
  });
};
