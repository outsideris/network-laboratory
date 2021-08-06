const fastify = require('fastify')({ logger: true });

fastify.register(require('./routes/system'));

const start = async () => {
  try {
    await fastify.listen(3000);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
