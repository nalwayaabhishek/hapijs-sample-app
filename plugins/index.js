const good = require('good');

module.exports = [
  {
    plugin: good,
    options: {
      reporters: {
        myConsoleReporter: [{
          module: 'good-squeeze',
          name: 'Squeeze',
          args: [{ log: '*', response: '*' }],
        }, {
          module: 'good-console',
        }, 'stdout'],
      },
    },
  },
  // require additional plugins here
];
