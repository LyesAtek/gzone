var express = require('express');
var router = express.Router();

module.exports = function (app) {
    router.get('/:imageId',
        app.oauth.authorise(),
        app.actions.images.get
    );
    router.get('/user/:userId',
        app.oauth.authorise(),
        app.actions.images.userList
    );
    router.get('/game/:gameId',
        app.oauth.authorise(),
        app.actions.images.gameList
    );
    router.post('',
        app.oauth.authorise(),
        app.actions.images.create
    );
    router.delete('/:imageId',
        app.oauth.authorise(),
        app.actions.images.delete
    );
    return router;
};
