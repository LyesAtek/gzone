var express = require('express');
var router = express.Router();
var bodyparser = require('body-parser').json();

module.exports = function (app) {
    router.get('/:id',
        bodyparser,
        app.actions.tricks.get
    );
    router.get('/list/:id',
        bodyparser,
        app.actions.tricks.list
    );
    router.post('',
        bodyparser,
        app.actions.tricks.create
    );
    router.delete('/:id',
        bodyparser,
        app.actions.tricks.delete
    );
    return router;
};
