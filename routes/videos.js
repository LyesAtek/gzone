var express = require('express');
var router = express.Router();

module.exports = function (app) {
    router.get('/:videoId',
        app.oauth.authorise(),
        app.actions.videos.get
    );
    router.get('/user/:userId',
        app.oauth.authorise(),
        app.actions.videos.userList
    );
    router.get('/game/:gameId',
        app.oauth.authorise(),
        app.actions.videos.gameList
    );
    router.post('',
        app.oauth.authorise(),
        app.actions.videos.create
    );
    router.delete('/:videoId',
        app.oauth.authorise(),
        app.actions.videos.delete
    );
    return router;
};
