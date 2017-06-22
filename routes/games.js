var express = require('express');
var router = express.Router();
var bodyparser = require('body-parser').json();

module.exports = function (app) {
    router.get('/',
        bodyparser,
        app.actions.games.list
    );
    router.get('/:gameId',
        bodyparser,
        app.actions.games.get
    );
    router.get('/:gameId/:categoryId',
        bodyparser,
        app.actions.games.categoryList
    );
    router.post('',
        bodyparser,
        app.actions.games.create
    );
    router.put('/:gameId',
        bodyparser,
        app.actions.games.update
    );
    router.delete('/:gameId',
        bodyparser,
        app.actions.games.delete
    );
    return router;
};
