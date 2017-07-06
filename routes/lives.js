var express = require('express');
var router = express.Router();

module.exports = function (app) {
    router.get('/:liveId',
        app.oauth.authorise(),
        app.actions.lives.get
    );
    router.get('/user/:userId',
        app.oauth.authorise(),
        app.actions.lives.userList
    );
    router.get('/game/:gameId',
        app.oauth.authorise(),
        app.actions.lives.gameList
    );
    router.post('',
        app.oauth.authorise(),
        app.actions.lives.create
    );
    router.delete('/:liveId',
        app.oauth.authorise(),
        app.actions.lives.delete
    );
    return router;
};
