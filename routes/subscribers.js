var express = require('express');
var router = express.Router();
var bodyparser = require('body-parser').json();

module.exports = function (app) {
    router.get('/:id',
        bodyparser,
        app.actions.subscribers.get
    );
    router.post('/',
        bodyparser,
        app.actions.subscribers.add
    );
    router.delete('/',
        bodyparser,
        app.actions.subscribers.delete
    );
    return router;
};
