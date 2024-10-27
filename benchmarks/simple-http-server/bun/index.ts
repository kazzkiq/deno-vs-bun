const server = Bun.serve({
  port: 3001,
  fetch(request) {
    return new Response("hi");
  },
});

console.log(`Listening on ${server.url}`);
