'use strict';

const glob = require('glob');
const path = require('path');
const _ = require('lodash');

// add ping route by default for health check
const routes = [{
  method: 'GET',
  path: '/ping',
  handler: () => 'Hello World!!',
  config: {
    tags: ['api'],
  },
}];


glob.sync('./server/**/*Routes.js').forEach((file) => {
  routes.push(require(path.resolve(file)));
});

// export routes
module.exports = _.flattenDeep(routes);
