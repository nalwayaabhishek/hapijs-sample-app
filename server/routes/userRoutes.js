'use strict';

const userController = require('../controllers/userController');

const API_PATH = '/api/1.0';

const routes = [];

routes.push({
  path: `${API_PATH}/users`,
  method: 'GET',
  handler: userController.getUsers,
  config: {
    tags: ['api'],
  },
});

module.exports = routes;
