module.exports = function (app) {
  app.use('/users',require('./users')(app));
  app.use('/friends',require('./friends')(app));
  app.use('/friendRequests',require('./friendRequests')(app));
  app.use('/followers',require('./followers')(app));
  app.use('/subscribers',require('./subscribers')(app));
  app.use('/tests',require('./tests')(app));
  app.use('/images',require('./images')(app));
  app.use('/videos',require('./videos')(app));
  app.use('/lives',require('./lives')(app));
  app.use('/posts',require('./posts')(app));
  app.use('/opinions',require('./opinions')(app));
  app.use('/tricks',require('./tricks')(app));
  app.use('/comments',require('./comments')(app));
};