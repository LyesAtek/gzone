var express = require('express');
var router = express.Router();
var bodyparser = require('body-parser').json();

module.exports = function (app) {
    router.get('/:opinionId',
        bodyparser,
        app.actions.opinions.get
    );
    router.get('/user/:userId',
        bodyparser,
        app.actions.opinions.userList
    );
    router.get('/test/:testId',
        bodyparser,
        app.actions.opinions.testList
    );
    router.post('',
        bodyparser,
        app.actions.opinions.create
    );
    router.delete('/:opinionId',
        bodyparser,
        app.actions.opinions.delete
    );
    return router;
};
