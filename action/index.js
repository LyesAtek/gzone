module.exports = function (app) {
    app.actions ={};
    app.actions.user= require('./user')(app);
    app.actions.friends= require('./friends')(app);
    app.actions.friendRequests= require('./friendRequests')(app);
}
