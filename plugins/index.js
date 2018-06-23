module.exports = [
  //set up good to log every kind of event. Change according to your needs.
  {
    plugin:require('good'),
    options:{
      reporters: {
        myConsoleReporter: [{
           module: 'good-squeeze',
           name: 'Squeeze',
           args: [{ log: '*', response: '*' }]
       }, {
           module: 'good-console'
       }, 'stdout'],
      }
    }
  }
  //require additional plugins here
];
