var mongoose = require('mongoose');

var uri = 'mongodb://admin:admin@ds133221.mlab.com:33221/heroku_mkpbh0hc';
module.exports = function (app) {
    app.mongoose = mongoose.connect(uri,function (err,db) {
        if (err)
            console.log('Unable to connect to the mongoDB server. Error: ',err);
        else
            console.log('Connection established to', uri);
    });
    app.model = {};
    app.model.user = require('./user')(app);
};