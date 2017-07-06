var express = require('express');
var oauthserver = require('oauth2-server');
var bodyParser = require('body-parser');
var port = 8003;
var app = express();
var server = require('http').Server(app);

(function init() {

    /*
     * Oauth2 configuration *
     */

    app.use(bodyParser.urlencoded({extended: true}));

    app.use(bodyParser.json());

    app.oauth = oauthserver({
        model: {
            getClient: function (clientId, clientSecret, callback) {
                var client = app.model.client;
                client.find({
                    id: clientId,
                    secret: clientSecret
                }, function (err, result) {
                    if (err) {
                        return callback(err);
                    }
                    else {
                        if (result) {
                            return callback(undefined, result);
                        }
                        else
                            return callback(err);
                    }
                });

            },
            grantTypeAllowed: function (clientId, grantType, callback) {
                var client = app.model.client;
                client.find({
                    id: clientId
                }, function (err, result) {
                    if (err) {
                        return callback(err);
                    }
                    else {
                        if (result) {
                            var isAllowed = grantType === 'password';
                            return callback(undefined, isAllowed);
                        }
                        else{
                            return callback(err);
                        }
                    }
                });
            },
            getAccessToken: function (bearerToken, callback) {
                var token = app.model.token;
                token.findOne({
                    value: bearerToken
                }, function(err, result){
                    if(err){
                        callback(err);
                    }
                    else{
                        if(result){
                            // TODO: Check
                            //result.expires = new Date(result.expires);
                            callback(undefined, result);
                        }
                        else{
                            callback("Token not found")
                        }
                    }
                });
            },
            saveAccessToken: function (accessToken, clientId, expires, user, callback) {
                var token = new app.model.token({
                    value: accessToken,
                    userId: user._id,
                    clientId: clientId,
                    expires: expires
                });
                token.save(function (err, result) {
                    if (err) {
                        return callback(err);
                    }
                    else {
                        if (result) {
                            return callback();
                        }
                        else {
                            return callback("Token post failed");
                        }
                    }
                });
            },
            getUser: function (username, password, callback) {
                var user = app.model.user;
                var options = {
                    password: password
                };
                username.indexOf('@') === -1 ? options.username = username : options.email = username;

                user.findOne(options, function (err, result) {
                    if (err) {
                        return callback(err);
                    }
                    else {
                        if (result) {
                            result.id = result._id;
                            return callback(undefined, result);
                        }
                        else {
                            return callback(err);
                        }
                    }
                });

            }
        },
        grants: ['password'],
        debug: true,
        accessTokenLifetime: 48*60*60 // 48h
    });

    // Get token route
    app.all('/oauth/token', app.oauth.grant());

    app.get('/', app.oauth.authorise(), function (req, res) {
        res.send('Secret area');
    });

    app.use(app.oauth.errorHandler());

    require('./model')(app);
    require('./action')(app);
    require('./routes')(app);
    require('./config')(app);
}());

    server.listen(process.env.PORT || port, function (err) {
    if (err)
        console.log("unable to listening on port " + port + " " + err);
    else
        console.log("Express SmartJug listening on port " + port);
});