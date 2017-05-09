module.exports = function (app) {
    app.actions ={};
    app.actions.user= require('./user')(app);
}
