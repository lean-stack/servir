#!/usr/bin/env node

const path = require('path');

console.log('Starting servir ...');

// Require the framework and instantiate it
const fastify = require('fastify')({ 
  logger: { level: 'warn' }
});

// Register static file server
fastify.register(require('fastify-static'), {
  root: __dirname,
});
  
// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}
start();
