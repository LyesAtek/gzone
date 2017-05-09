var mongoose = require('mongoose');

var uri = 'mongodb://admin:admin@ds053708.mlab.com:53708/heroku_c37tjzdd';
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