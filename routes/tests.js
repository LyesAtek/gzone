var express = require('express');
var router = express.Router();
var bodyparser = require('body-parser').json();

module.exports = function (app) {
    router.get('/:testId',
        bodyparser,
        app.actions.tests.get
    );
    router.get('/user/:userId',
        bodyparser,
        app.actions.tests.userList
    );
    router.get('/game/:gameId',
        bodyparser,
        app.actions.tests.gameList
    );
    router.post('',
        bodyparser,
        app.actions.tests.create
    );
    router.delete('/:testId',
        bodyparser,
        app.actions.tests.delete
    );
    return router;
};
