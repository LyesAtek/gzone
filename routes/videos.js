var express = require('express');
var router = express.Router();
var bodyparser = require('body-parser').json();

module.exports = function (app) {
    router.get('/:videoId',
        bodyparser,
        app.actions.videos.get
    );
    router.get('/user/:userId',
        bodyparser,
        app.actions.videos.userList
    );
    router.get('/game/:gameId',
        bodyparser,
        app.actions.videos.gameList
    );
    router.post('',
        bodyparser,
        app.actions.videos.create
    );
    router.delete('/:videoId',
        bodyparser,
        app.actions.videos.delete
    );
    return router;
};
