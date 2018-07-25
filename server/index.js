const path = require("path");

const config = require("../config");

const fastify = require("fastify")({ logger: true });
fastify.register(require("fastify-sensible"));
fastify.register(require("fastify-static"), {
  root: path.join(__dirname, "..", "public"),
  prefix: "/"
});

// Declare a route
fastify.get("/api/*", async (request, reply) => {
  try {
    request.log.info("Requests are not yet being sent to the API");
    reply.badRequest({ message: "API Calls Not Yet Handled" });
  } catch (err) {
    reply.internalServerError("Unable to fetch WOD RSS feed");
  }
});

/*fastify.get('/api/!*', (request, reply) => {
  reply.send({ hello: 'world' });
});

fastify.all("*", (request, reply) => {
  // reply.sendFile(path.join(__dirname, "..", "index.html"));
  reply.send({ hello: 'world' });
});*/

// Run the server!
fastify.listen(3001, (err, address) => {
  if (err) throw err;
});
