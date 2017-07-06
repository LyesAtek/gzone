var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser').json();

module.exports = function (app) {
    router.get('/',
        app.oauth.authorise(),
        app.actions.user.list
    );
    router.get('/:userId',
        app.oauth.authorise(),
        app.actions.user.get
    );
    router.get('/followed-users/:userId',
        app.oauth.authorise(),
        app.actions.user.followedUsersList
    );
    router.get('/followed-games/:userId',
        app.oauth.authorise(),
        app.actions.user.followedUsersList
    );
    router.get('/location/:minLongitude/:maxLongitude/:minLatitude/:maxLatitude',
        app.oauth.authorise(),
        app.actions.user.locationList
    );
    router.post('',
        bodyParser,
        app.actions.user.create
    );
    router.post('/login',
        app.oauth.authorise(),
        app.actions.user.login
    );

    router.put('/:userId',
        app.oauth.authorise(),
        app.actions.user.update
    );

    router.delete('/:userId',
        app.oauth.authorise(),
        app.actions.user.delete
    );
    return router;
};