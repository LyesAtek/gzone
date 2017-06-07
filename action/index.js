module.exports = function (app) {
    app.actions = {};
    app.actions.user = require('./users')(app);
    app.actions.friends = require('./friends')(app);
    app.actions.friendRequests = require('./friendRequests')(app);
    app.actions.followers = require('./followers')(app);
    app.actions.subscribers = require('./subscribers')(app);
    app.actions.tests = require('./tests')(app);
    app.actions.images = require('./images')(app);
    app.actions.videos = require('./videos')(app);
    app.actions.lives = require('./lives')(app);
    app.actions.posts = require('./posts')(app);
    app.actions.opinions = require('./opinions')(app);
    app.actions.tricks = require('./tricks')(app);
    app.actions.comments = require('./comments')(app);
};
