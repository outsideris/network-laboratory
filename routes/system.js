module.exports = async function system(fastify) {
  fastify.get('/healthz', async function healthz() {
    return 'ok';
  });
};
