async function healthz(fastify) {
  fastify.get('/healthz', async () => 'ok');
}

module.exports = healthz;
