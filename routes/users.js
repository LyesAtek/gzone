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
    router.get('/token/:token',
        bodyParser,
        app.actions.user.getByToken
    );
    router.get('/followed-users/:userId',
        app.oauth.authorise(),
        app.actions.user.followedUsersList
    );
    router.get('/followed-games/:userId',
        app.oauth.authorise(),
        app.actions.user.followedUsersList
    );
    router.put('/follow-user/:userId/:otherId',
        app.oauth.authorise(),
        app.actions.user.followUser
    );
    router.put('/unfollow-user/:userId/:otherId',
        app.oauth.authorise(),
        app.actions.user.unfollowUser
    );
    router.put('/follow-game/:userId/:otherId',
        app.oauth.authorise(),
        app.actions.user.followGame
    );
    router.put('/unfollow-game/:userId/:otherId',
        app.oauth.authorise(),
        app.actions.user.unfollowGame
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