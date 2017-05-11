module.exports = function (app) {
  app.use('/users',require('./users')(app));
  app.use('/friends',require('./friends')(app));
  app.use('/friendRequests',require('./friendRequests')(app));
};