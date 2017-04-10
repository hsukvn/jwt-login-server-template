const Authentication = require('./controller/authentication');

module.exports = function(app) {
  app.post('/signup', Authentication.signup);
}
