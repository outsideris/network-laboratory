module.exports = async function leader(fastify) {
  fastify.post('/register', async function register(request, reply) {
    return { root: true };
  });
};
