module.exports = async function root(fastify) {
  fastify.get('/', async function home() {
    return { root: true };
  });
};
