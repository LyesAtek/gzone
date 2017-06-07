var express = require('express');
var router = express.Router();
var bodyparser = require('body-parser').json();

module.exports = function (app) {
    router.get('/:imageId',
        bodyparser,
        app.actions.images.get
    );
    router.get('/user/:userId',
        bodyparser,
        app.actions.images.userList
    );
    router.get('/game/:gameId',
        bodyparser,
        app.actions.images.gameList
    );
    router.post('',
        bodyparser,
        app.actions.images.create
    );
    router.delete('/:imageId',
        bodyparser,
        app.actions.images.delete
    );
    return router;
};
