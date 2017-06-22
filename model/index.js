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
    app.model.friendRequest = require('./friendRequest')(app);
    app.model.test = require('./test')(app);
    app.model.image = require('./image')(app);
    app.model.video = require('./video')(app);
    app.model.live = require('./live')(app);
    app.model.post = require('./post')(app);
    app.model.opinion = require('./opinion')(app);
    app.model.trick = require('./trick')(app);
    app.model.comment = require('./comment')(app);
    app.model.game = require('./game')(app);
    app.model.category = require('./category')(app);
};