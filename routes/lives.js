var express = require('express');
var router = express.Router();
var bodyparser = require('body-parser').json();

module.exports = function (app) {
    router.get('/:liveId',
        bodyparser,
        app.actions.lives.get
    );
    router.get('/user/:userId',
        bodyparser,
        app.actions.lives.userList
    );
    router.get('/game/:gameId',
        bodyparser,
        app.actions.lives.gameList
    );
    router.post('',
        bodyparser,
        app.actions.lives.create
    );
    router.delete('/:liveId',
        bodyparser,
        app.actions.lives.delete
    );
    return router;
};
