'use strict';

const config = require('config');
const Server = require('./server');
const logger = require('./server/utils/logger');

/**
 * Starts the server
 * @returns {Promise.<void>}
 */
const startServer = async function startServer() {
  try {
    // add things here before the app starts, like database connection check etc
    const server = await Server.deployment();
    await server.start();
    logger.info(`server started at port: ${config.get('app.port')}
                with env: ${config.util.getEnv('NODE_ENV')}`);
  } catch (error) {
    logger.error(error);
    process.exit(1);
  }
};

startServer();
