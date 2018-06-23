'use strict';

const Hapi = require('hapi');
const config = require('config');

const routes = require('./routes');
const plugins = require('./plugins');
const logger = require('./server/utils/logger');

exports.deployment = async () => {
  const server = new Hapi.Server({
    host: 'localhost',
    port: config.get('app.port'),
  });

  // attach routes here
  server.route(routes);

  // register plugins
  const registerPlugins = async () => {
    try {
      await server.register(plugins);
    } catch (error) {
      logger.error(error, 'Failed to register hapi plugins');
      throw error;
    }
  };

  registerPlugins();
  return server;
};
